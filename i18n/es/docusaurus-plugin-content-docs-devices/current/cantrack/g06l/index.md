---
slug: /cantrack/g06l
id: g06l
sidebar_label: G06L
sidebar_class_name: menu_item_tracker
---
# CanTrack - G06L

![G06L](./tracker.jpg)

El G06L es un rastreador GPS 4G compacto, compatible con Plaspy y optimizado para despliegues basados en vehículos. Diseñado para motocicletas, automóviles, scooters y camiones ligeros, el G06L combina una carcasa con antena interna de tamaño reducido con hardware GNSS/GSM probado y una batería de respaldo, para que los operadores de flotas y los proveedores de servicios obtengan un seguimiento fiable en tiempo real y protección anti‑robo, con una integración sencilla a la plataforma de Plaspy.

El dispositivo admite telemetría y reporting de alarmas de forma integral —incluyendo detección de ignición, SOS, movimiento, exceso de velocidad y alarmas por corte de energía— y es configurable vía PC \(USB\), GPRS o SMS. Para empresas que buscan un rastreador de perfil bajo que soporte corte remoto tipo inmovilizador, almacenamiento offline y actualizaciones de firmware OTA, el G06L ofrece una solución flexible que se integra a la perfección con Plaspy para la gestión de flotas, telemática de seguros y flujos de trabajo de seguridad de vehículos.

## Puntos clave

- Compatible con Plaspy: integración fluida para seguimiento en tiempo real, alarmas e informes en las aplicaciones web y móviles de Plaspy.
- Diseño compacto con antena interna \(85 × 45 × 17 mm\) para una instalación discreta en motocicletas, automóviles y vehículos ligeros.
- Amplio rango de tensión de entrada \(9–36 V DC\) y batería de respaldo integrada de 200 mAh para soportar alarma por corte de energía y la continuidad de la transmisión de ubicación.
- Detección de ignición y salida digital para habilitar flujos de trabajo de inmovilizador basados en telemetría y control remoto de accesorios mediante un relé de corte de energía.
- Rendimiento GNSS robusto: receptor de 66 canales con sensibilidad de -165 dBm y una precisión de ubicación &lt;5 m CEP para un seguimiento en tiempo real fiable.
- Memoria búfer \(~2000 puntos de datos\) y modos de suspensión configurables ayudan a preservar datos y batería cuando GPRS no está disponible o el vehículo está estacionado.
- Actualizaciones de firmware OTA, junto con configuración vía PC-USB/GPRS/SMS, facilitan la gestión remota y la escalabilidad para integradores.

## Cómo funciona con Plaspy

Cuando está instalado, el G06L obtiene de forma continua la posición GNSS y la telemetría del vehículo y transmite los datos a Plaspy a través de LTE/GPRS utilizando TCP/IP. Plaspy ingiere coordenadas GPS, eventos de ignición y movimiento, alarmas y puntos grabados sin conexión para proporcionar ubicación en vivo, reproducción histórica, alertas y tableros de telemetría. Los administradores pueden configurar intervalos de informe, umbrales de alarma y comandos remotos desde la plataforma Plaspy para maximizar la seguridad de la flota y la visibilidad operativa.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas vía GPRS/LTE a Plaspy para seguimiento en vivo y historial de trayectos.
- La detección de ignición encendida/apagada y las alarmas de movimiento aparecen en Plaspy para apoyar la monitorización del comportamiento de conducción y flujos de trabajo basados en eventos.
- La alarma por corte de energía y la información de la batería de respaldo aseguran que Plaspy reciba una última posición conocida cuando se interrumpe la alimentación principal.
- Almacenamiento de memoria para grabación sin conexión \(~2000 puntos\) garantiza que no haya huecos: los datos en cola se cargan en Plaspy cuando se restablece la conectividad.
- Inmovilización remota opcional \(corte de combustible/energía\) y control remoto de accesorios se pueden ejecutar a través de Plaspy cuando estén habilitados y configurados.

## Resumen técnico

| Modelo | G06L |
| --- | --- |
| Conectividad | LTE / GSM / GPRS \(módulo SIMCom LTE Cat 1, Serie A7670 + AT6558R\) |
| Bandas | LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66; GSM 850/900/1800/1900 MHz |
| Voltaje de funcionamiento | 9–36 V DC |
| Batería de respaldo | 200 mAh / 3,7 V Li-Polímero \(soporta alarma por corte de energía y reporte de ubicación de corto plazo\) |
| Consumo en espera y en funcionamiento | Aproximadamente 5 mA ~ 50 mA \(según modo\) |
| Antenas | Antenas GSM y GPS integradas \(internas\) |
| GNSS | 66 canales; sensibilidad de seguimiento -165 dBm; precisión de ubicación &lt;5 m CEP; TTFF: Cold &lt;35 s, Hot &lt;1 s |
| Sensores y almacenamiento | Sensor G \(actualizaciones disparadas por cambio de ángulo\); almacenamiento de memoria para ~2000 puntos |
| Interfaces | Salida digital para relé de corte de energía; entrada digital para detección de ignición; Micro USB para firmware/configuración; interfaz de alimentación disponible en versiones de 8 pines o 4 pines |
| Protocolos y características | GPRS Clase 12, TCP/IP, OTA soportado, detección de estado de ignición, modos de sueño configurables, alarmas SOS/movimiento/velocidad/corte de energía, inmovilización opcional y control remoto de accesorios |
| Factor de forma | Carcasa compacta con antena interna \(85 × 45 × 17 mm\) para instalaciones en vehículos |
| Gestión remota | Actualizaciones de firmware OTA; configuración vía PC-USB, GPRS o SMS |

## Casos de uso

- Gestión de flotas: rastrea rutas, monitoriza eventos de ignición y velocidades, y genera informes de viajes a través del panel de Plaspy.
- Protección antirrobo para motocicletas y bicicletas eléctricas: instalación interna discreta, alarmas SOS y reporte de cortes de energía con batería de respaldo.
- Telemática de seguros de vehículos: registro del comportamiento de conducción y eventos para programas de seguros basados en el uso y verificación de reclamaciones.
- Talleres de servicio y flotas de alquiler: recibir alertas de ignición y movimiento, opciones de inmovilización remota y reproducción de ubicación histórica.
- Operaciones con camiones ligeros y repartos: rastreador compacto para optimización de rutas, visibilidad en tiempo real de activos y telemetría operativa.

## Por qué elegir este rastreador con Plaspy

El G06L es una opción práctica para integradores y operadores de flotas que necesitan un rastreador GPS compacto, fiable y compatible con Plaspy, con telemetría robusta y capacidades de control remoto. Sus antenas internas y su formato compacto simplifican la instalación, de forma discreta; el rendimiento GNSS integrado y la batería de respaldo aseguran un registro preciso y continuo incluso durante una pérdida de energía. Con detección de ignición, alarmas configurables, almacenamiento sin conexión y control opcional del inmovilizador, el G06L ofrece las características esenciales necesarias para anti‑robo, gestión de flotas y telemática de seguros.

Combinado con la plataforma de Plaspy —que también admite fuentes de telemetría adicionales como sensores Bluetooth y dispositivos de monitoreo de combustible externo— el G06L pasa a formar parte de un ecosistema escalable para seguimiento en tiempo real, inmovilización remota y reportes accionables. Las actualizaciones OTA, canales de configuración flexibles \(USB/GPRS/SMS\) y opciones OEM/ODM convierten al G06L en un rastreador confiable, amigable para integradores, para despliegues donde la precisión, una instalación de perfil bajo y el control operacional son importantes.

