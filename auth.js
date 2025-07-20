// Sistema de Autenticação Trip Base
class AuthSystem {
    constructor() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.username = localStorage.getItem('username') || '';
        this.loginMethod = localStorage.getItem('loginMethod') || 'standard';
        this.init();
    }

    init() {
        // Verificar se está na página de login e já está logado
        if (this.isLoggedIn && (window.location.pathname.includes('login.html') || window.location.pathname.includes('about.html'))) {
            window.location.href = 'index.html';
            return;
        }

        // Verificar se não está logado e está tentando acessar o dashboard
        if (!this.isLoggedIn && window.location.pathname.includes('index.html')) {
            window.location.href = 'login.html';
            return;
        }

        // Se está logado e no dashboard, mostrar informações do usuário
        if (this.isLoggedIn && window.location.pathname.includes('index.html')) {
            this.setupUserInterface();
        }
    }

    login(username, password) {
        const VALID_USERNAME = 'admin';
        const VALID_PASSWORD = '123456';

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            localStorage.setItem('loginMethod', 'standard');
            localStorage.setItem('loginTime', new Date().toISOString());
            return true;
        }
        return false;
    }

    loginWithGoogle() {
        // Simulação de login com Google
        // Em uma implementação real, aqui seria integrado com a Google OAuth API
        return new Promise((resolve) => {
            // Simular delay da API do Google
            setTimeout(() => {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', 'Google User');
                localStorage.setItem('loginMethod', 'google');
                localStorage.setItem('loginTime', new Date().toISOString());
                resolve(true);
            }, 1000);
        });
    }

    logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('loginMethod');
        localStorage.removeItem('loginTime');
        window.location.href = 'login.html';
    }

    setupUserInterface() {
        // Adicionar botão de login/logout no header-right
        const headerRight = document.querySelector('.header-right');
        if (headerRight && !document.querySelector('.user-menu')) {
            const userMenu = this.createUserMenu();
            headerRight.appendChild(userMenu);
        }
    }

    createUserMenu() {
        const userMenu = document.createElement('div');
        userMenu.className = 'user-menu';
        userMenu.innerHTML = `
            <div class="user-info">
                <i class="fas fa-user-circle"></i>
                <span class="username">${this.username}</span>
                <div class="user-dropdown">
                    <div class="dropdown-item" onclick="auth.showProfile()">
                        <i class="fas fa-user"></i>
                        Perfil
                    </div>
                    <div class="dropdown-item" onclick="auth.logout()">
                        <i class="fas fa-sign-out-alt"></i>
                        Sair
                    </div>
                </div>
            </div>
        `;

        // Adicionar estilos para o menu do usuário
        const style = document.createElement('style');
        style.textContent = `
            .user-menu {
                position: relative;
                margin-left: auto;
            }

            .user-info {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
            }

            .user-info:hover {
                background: rgba(255, 255, 255, 0.2);
            }

            .user-info i {
                font-size: 1.2rem;
                color: #00d4aa;
            }

            .username {
                color: #ffffff;
                font-weight: 500;
                font-size: 0.9rem;
            }

            .user-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                background: rgba(45, 45, 45, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 8px 0;
                min-width: 150px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.1);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                z-index: 1000;
                margin-top: 8px;
            }

            .user-info:hover .user-dropdown {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .dropdown-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px 16px;
                color: #ffffff;
                cursor: pointer;
                transition: background 0.2s ease;
                font-size: 0.9rem;
            }

            .dropdown-item:hover {
                background: rgba(0, 212, 170, 0.2);
            }

            .dropdown-item i {
                font-size: 1rem;
                color: #00d4aa;
                width: 16px;
            }

            @media (max-width: 768px) {
                .username {
                    display: none;
                }
                
                .user-info {
                    padding: 8px 12px;
                }
            }
        `;
        document.head.appendChild(style);

        return userMenu;
    }

    showProfile() {
        const loginTime = localStorage.getItem('loginTime');
        const formattedTime = loginTime ? new Date(loginTime).toLocaleString('pt-BR') : 'Não disponível';
        
        alert(`Perfil do Usuário:
        
Nome: ${this.username}
Método de Login: ${this.loginMethod === 'google' ? 'Google' : 'Padrão'}
Último Login: ${formattedTime}
Status: Conectado`);
    }

    // Método para verificar se o usuário está autenticado
    isAuthenticated() {
        return this.isLoggedIn;
    }

    // Método para obter informações do usuário
    getUserInfo() {
        return {
            username: this.username,
            loginMethod: this.loginMethod,
            loginTime: localStorage.getItem('loginTime')
        };
    }
}

// Inicializar sistema de autenticação
const auth = new AuthSystem();

