---
slug: /gotop/g23
id: g23
sidebar_label: G23
sidebar_class_name: menu_item_tracker
---
# GOTOP - G23

![G23](./tracker.jpg)

El Mini Wire GPS Tracker G23 es un rastreador GPS compacto, compatible con Plaspy, diseñado para una instalación en vehículo discreta y un seguimiento en tiempo real fiable. Diseñado para coches, motocicletas, bicicletas eléctricas y vehículos comerciales ligeros, el G23 ofrece posicionamiento híbrido \(GPS + BeiDou + LBS\) con una precisión de ubicación de aproximadamente 5 metros. Su formato compacto y antenas internas lo hacen ideal para la gestión de flotas y aplicaciones anti‑robo donde se requiere un rastreador de perfil bajo.

Diseñado pensando en la telemetría práctica de vehículos, el G23 admite detección de encendido \(ACC\), corte remoto de energía/combustible \(utilizable como un inmovilizador\), alarma de apagado, alertas por exceso de velocidad y de vibración/movimiento. Con una entrada DC amplia \(9–95 V\), bajo consumo en reposo y una batería de respaldo de 80 mAh para alertas fuera de línea, el G23 ofrece una alta disponibilidad y una rápida integración con Plaspy para informes, alertas y control central de la flota.

## Puntos clave

- Compatible con Plaspy para monitoreo centralizado en tiempo real de rastreadores GPS y gestión de flotas.
- Posicionamiento híbrido preciso \(GPS + BeiDou + LBS\) con una precisión de aproximadamente 5 m para localización exacta y reproducción de rutas.
- Capacidades anti‑robo y de inmovilización mediante corte remoto de energía/combustible y alarma de apagado.
- Entrada DC amplia \(9–95 V\) para soportar coches, camiones, motocicletas y e-bikes sin convertidores adicionales.
- Diseño de bajo consumo con corriente en reposo de ~5–15 mA \(12 V\) y una batería de respaldo de 80 mAh para reportar eventos fuera de línea.
- Entradas de telemetría del vehículo: detección de encendido ACC, exceso de velocidad, vibración y alertas de ACC/motor no autorizadas para un seguimiento integral de eventos.
- Carcasa ABS compacta y discreta \(77 × 28 × 15 mm\) que simplifica instalaciones ocultas y la prevención de robos.

## Cómo funciona con Plaspy

El G23 transmite la ubicación y la telemetría de eventos a Plaspy mediante su enlace GSM 2G. Una vez conectado, Plaspy ingiere posiciones GNSS, marcadores de estado y eventos de alarma para proporcionar seguimiento en tiempo real, reproducción histórica, alertas de geovallas e informes de la flota. La integración es sencilla: Plaspy recibe informes de ubicación estándar y códigos de evento desde el G23 y los asigna a paneles, notificaciones y flujos de automatización utilizados en la gestión de flotas y la monitorización anti‑robo.

- Actualizaciones de ubicación y telemetría en tiempo real \(GNSS + LBS\) enviadas a Plaspy para mapas en vivo e informes.
- Detección de encendido \(ACC\) y alertas de ACC/motor no autorizadas para monitorizar inicios no autorizados y el comportamiento del conductor.
- Corte remoto de energía/combustible para intervención al estilo inmovilizador, controlado por Plaspy cuando la instalación y la normativa local lo permiten.
- Alarma de apagado y notificaciones de la batería de respaldo permiten a Plaspy señalar manipulaciones o pérdidas de energía del vehículo.
- Alertas de exceso de velocidad, vibración y movimiento alimentan las reglas de Plaspy para alertas, entrenamiento de conductores y flujos de seguridad.
- Funciona junto al ecosistema más amplio de Plaspy: si bien el G23 no incluye sensores Bluetooth, Plaspy puede integrar accesorios BLE y sensores de terceros dentro de la plataforma para ampliar la telemetría cuando se utiliza hardware adicional.

## Visión técnica

| Conectividad | GSM \(módulo MT6261D, 2G\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz |
| Potencia y Batería | Entrada DC 9V–95V; corriente de funcionamiento 30–60 mA \(12V\); corriente en reposo ~5–15 mA \(12V\) |
| Batería de respaldo | 80 mAh, polímero de 3.7V \(soporta alertas fuera de línea\) |
| Interfaces | 1 salida de bajo nivel \(corte de energía/combustible\), 1 H-IN \(detección ACC\), 1 UART-TTL \(3.3V\) para configuración |
| GNSS | ZKMicro AT6558D \(GPS + BeiDou + LBS\), sensibilidad −162 dBm, inicio en frío ~32 s, inicio en caliente ~1 s, ~5 m de precisión |
| SIM y Antena | Ranura Micro SIM; antenas GPS y GSM internas |
| Bluetooth | No incluido en el dispositivo \(sin módulo BLE\) |
| Gestión remota | Configuración del dispositivo vía puerto serie UART-TTL de 3.3V; no se especifica FOTA ni gestión web |
| Forma | Rastreador mini cableado compacto, carcasa ABS, 77 × 28 × 15 mm; peso 32 g |
| Medio ambiente | Operación −30°C a 75°C; almacenamiento −30°C a 80°C; humedad 5%–95% |

## Casos de uso

- Gestión de flotas: monitorear ubicaciones de vehículos, comportamiento del conductor y eventos de exceso de velocidad para taxis, flotas de alquiler y vehículos de reparto.
- Anti‑robo e inmovilización: instalación discreta con corte remoto de energía/combustible proporciona a los operadores una herramienta para detener el uso no autorizado del vehículo.
- Rastreo de motocicletas y bicicletas eléctricas: tamaño compacto y amplio rango de voltaje permiten aplicaciones de dos ruedas donde el espacio es limitado.
- Coches de pasajeros y camiones ligeros: detección de ACC, alarmas de apagado y modo de espera de bajo consumo preservan la vida de la batería mientras se mantiene la vigilancia.
- Telemática para flotas mixtas: el amplio rango de entrada de voltaje del G23 y su rendimiento fiable en GNSS/GSM lo hacen adecuado para diversos tipos de vehículos.

## Por qué elegir este rastreador con Plaspy

Al combinarse con Plaspy, el Mini Wire GPS Tracker G23 se convierte en un nodo fiable dentro de un sistema escalable de telemetría y gestión de flotas. Su posicionamiento GNSS preciso, entradas esenciales del vehículo \(detección de encendido, corte de energía/combustible\) y su diseño de bajo consumo proporcionan el conjunto práctico de funciones que la mayoría de flotas y operadores de alquiler requieren. Plaspy convierte los datos de ubicación y alarma del G23 en conocimientos accionables: seguimiento en tiempo real, alertas anti-robo, control de corte de combustible/inmovilizador y reportes históricos, permitiendo una respuesta más rápida a incidentes y una mejor visibilidad operativa.

Elija el G23 con Plaspy si necesita un rastreador GPS discreto y rentable que equilibre instalación compacta con telemetría robusta. La amplia tolerancia de voltaje del dispositivo, las antenas internas y la batería de respaldo aseguran una operación fiable en campo, mientras que la plataforma de Plaspy añade los paneles de control, notificaciones e integraciones que hacen que el rastreo GPS sea útil para la gestión de flotas, la protección anti‑robo y la telemetría continua de vehículos.

