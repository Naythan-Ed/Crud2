<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control de Acceso - Marbore Moshaca</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 30px;
        }

        .card {
            background: white;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 30px;
        }

        .icon-circle {
            width: 50px;
            height: 50px;
            background: #f7fafc;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .card-title {
            font-size: 28px;
            font-weight: 700;
            color: #1a202c;
        }

        .section-title {
            font-size: 14px;
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .button-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 30px;
        }

        .btn {
            padding: 20px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            background: white;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 15px;
            font-weight: 500;
            color: #4a5568;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .btn:hover {
            border-color: #667eea;
            background: #f7fafc;
        }

        .btn.active {
            border-color: #48bb78;
            background: #f0fff4;
            color: #48bb78;
        }

        .indicator {
            width: 8px;
            height: 8px;
            background: #48bb78;
            border-radius: 50%;
            display: inline-block;
            margin-right: 5px;
        }

        /* Información del registro */
        .info-section {
            margin-top: 35px;
            padding-top: 35px;
            border-top: 2px solid #e2e8f0;
        }

        .info-item {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            gap: 20px;
        }

        .info-label {
            font-size: 16px;
            font-weight: 600;
            color: #1a202c;
            min-width: 110px;
        }

        .info-value {
            flex: 1;
            padding: 16px 20px;
            background: #f7fafc;
            border-radius: 10px;
            color: #4a5568;
            font-size: 15px;
            border: 2px solid #e2e8f0;
            min-height: 50px;
        }

        .info-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }

        .info-box {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        /* Sección de Vehículos */
        .vehicles-section {
            margin-top: 35px;
            padding-top: 35px;
            border-top: 2px solid #e2e8f0;
        }

        .vehicle-question {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 25px;
        }

        .btn-vehicle {
            padding: 18px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            background: white;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 15px;
            font-weight: 500;
            color: #4a5568;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .btn-vehicle:hover {
            border-color: #667eea;
            background: #f7fafc;
        }

        .btn-vehicle.active {
            border-color: #667eea;
            background: #ebf4ff;
            color: #667eea;
        }

        .vehicle-details {
            display: none;
            animation: fadeIn 0.3s;
        }

        .vehicle-details.show {
            display: block;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .time-card {
            background: linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%);
            border-radius: 16px;
            padding: 30px;
            text-align: center;
        }

        .time-label {
            color: #667eea;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .time {
            font-size: 48px;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 10px;
        }

        .date {
            color: #667eea;
            font-size: 13px;
        }

        .shift-card {
            background: white;
            border-radius: 16px;
            padding: 30px;
            margin-top: 20px;
            text-align: center;
        }

        .shift-circle {
            width: 150px;
            height: 150px;
            background: linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 700;
            color: #7c3aed;
        }

        .shift-info {
            color: #4a5568;
            font-size: 14px;
            margin-bottom: 5px;
        }

        .shift-id {
            color: #a0aec0;
            font-size: 13px;
            letter-spacing: 1px;
        }

        /* Tarjeta de imagen del usuario */
        .user-card {
            background: white;
            border-radius: 16px;
            padding: 40px;
            margin-top: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .user-image-container {
            display: flex;
            justify-content: center;
        }

        .user-image {
            width: 100%;
            aspect-ratio: 3/4;
            max-height: 350px;
            border-radius: 16px;
            background: #f7fafc;
            border: 3px solid #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .user-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .user-image-placeholder {
            color: #a0aec0;
            font-size: 100px;
        }

        @media (max-width: 968px) {
            .container {
                grid-template-columns: 1fr;
            }

            .button-group,
            .vehicle-question,
            .info-row {
                grid-template-columns: 1fr;
            }

            .info-item {
                flex-direction: column;
                align-items: flex-start;
            }

            .info-label {
                min-width: auto;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="icon-circle">🕐</div>
                <div>
                    <div class="card-title">Control de Acceso</div>
                    <div style="color: #a0aec0; font-size: 14px;">Sistema de Registro</div>
                </div>
            </div>

            <div class="section-title">
                👥 Tipo de Registro
            </div>
            <div class="button-group">
                <button class="btn active">
                    <span class="indicator"></span>
                    Entrada
                </button>
                <button class="btn">
                    <span class="indicator" style="background: #cbd5e0;"></span>
                    Salida
                </button>
            </div>

            <!-- Información del Registro -->
            <div class="info-section">
                <div class="section-title">
                    📝 Información del Registro
                </div>

                <div class="info-item">
                    <div class="info-label">Nombre:</div>
                    <div class="info-value"></div>
                </div>

                <div class="info-item">
                    <div class="info-label">Apellidos:</div>
                    <div class="info-value"></div>
                </div>

                <div class="info-row">
                    <div class="info-box">
                        <div class="info-label">Grupo:</div>
                        <div class="info-value"></div>
                    </div>

                    <div class="info-box">
                        <div class="info-label">Hora:</div>
                        <div class="info-value"></div>
                    </div>
                </div>
            </div>

            <!-- Sección de Vehículos -->
            <div class="vehicles-section">
                <div class="section-title">
                    🚗 ¿Trae vehículo?
                </div>
                
                <div class="vehicle-question">
                    <button class="btn-vehicle" id="btnSi">
                        ✅ Sí
                    </button>
                    <button class="btn-vehicle active" id="btnNo">
                        ❌ No
                    </button>
                </div>

                <div class="vehicle-details" id="vehicleDetails">
                    <div class="info-item">
                        <div class="info-label">Placas:</div>
                        <div class="info-value" style="text-transform: uppercase;"></div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="time-card">
                <div class="time-label">
                    📅 Hora Actual
                </div>
                <div class="time">23:10</div>
                <div class="date">miércoles, 11 de junio de 2025</div>
            </div>

            <div class="shift-card">
                <div class="shift-circle">
                    Vespertino
                </div>
                <div class="shift-info">Turno Registrado</div>
                <div class="shift-id">XXXX-XXXX-XXXX</div>
            </div>

            <!-- Tarjeta separada para la imagen del usuario -->
            <div class="user-card">
                <div class="user-image-container">
                    <div class="user-image">
                        <!-- Aquí se mostrará la imagen del usuario -->
                        <!-- <img src="ruta-de-la-imagen.jpg" alt="Usuario"> -->
                        <div class="user-image-placeholder">👤</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>