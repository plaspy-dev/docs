---
slug: /cantrack/tk08al
id: tk08al
sidebar_label: TK08AL
sidebar_class_name: menu_item_tracker
---
# CanTrack - TK08AL

![TK08AL](./tracker.jpg)

El TK08AL es un rastreador GPS para vehículos cableado con 4G diseñado para la seguridad fiable del vehículo y la gestión de conductores. Compatible con Plaspy desde el inicio, el TK08AL ofrece seguimiento en tiempo real, detección de movimiento e ignición, alertas SOS y de velocidad, y protección ante cortes de energía con batería de respaldo interna, lo que lo convierte en una opción práctica para la gestión de flotas, anti-robos y flujos de autorización de conductores.

Construido alrededor de un módulo SIMCom LTE Cat 1, el TK08AL combina un rendimiento GNSS robusto con amplio soporte de red y comportamientos configurables \(modos de reposo, actualizaciones por cambio de ángulo y almacenamiento de datos\) para mantener la telemetría fluida incluso en condiciones desafiantes. Su identificación de conductor integrada por RFID y el soporte para funciones opcionales de inmovilizador basadas en relé permiten a los operadores hacer cumplir políticas de conductor autorizado, al tiempo que integran datos de ubicación y eventos del vehículo en Plaspy para una visibilidad operativa.

## Aspectos destacados

- Compatible con Plaspy para seguimiento en tiempo real y gestión centralizada de flotas entre vehículos y activos.
- Autorización de conductores con soporte RFID integrado y una interfaz RS485 para lectores RFID externos que eviten el uso no autorizado.
- Entrega fiable de telemetría vía LTE Cat 1; respaldo GSM/GPRS, asegurando actualizaciones de datos y alertas consistentes.
- Capacidad anti-robos y desactivación remota mediante un relé opcional de combustible/eléctrico para control tipo inmovilizador.
- Batería de respaldo interna de 200 mAh y alarma de corte de energía para detectar manipulación y proporcionar operación a corto plazo durante un fallo.
- Almacenamiento local de datos \(hasta 2,000 registros\) y actualizaciones por cambios de ángulo para mantener el historial cuando la conectividad se interrumpe.
- Modo de reposo de bajo consumo y comportamiento de sueño configurable para admitir una variedad de tipos de vehículos, desde coches hasta bicicletas eléctricas, con rango de entrada de 9–90 VDC.

## Cómo funciona con Plaspy

El TK08AL transmite la ubicación del vehículo y telemetría de eventos a Plaspy mediante protocolos estándar de clase GT sobre LTE o GPRS. Una vez integrado, Plaspy ingiere posiciones GPS, eventos de ignición/movimiento, disparos SOS, alertas de velocidad y alarmas de corte de energía, por lo que los gestores de flotas y administradores pueden monitorear el estado, recibir alertas y generar informes desde una plataforma única.

- Actualizaciones de ubicación y telemetría en tiempo real vía LTE Cat 1; respaldo automático a GSM/GPRS cuando sea necesario.
- Detección de movimiento e ignición para estado en tiempo real y segmentación de trayectos en los paneles de Plaspy.
- Eventos de identificación de conductor a partir del RFID integrado o de un lector RFID externo conectado vía RS485 para registros de conductores autorizados.
- Alarma de corte de energía e informe de batería interna de respaldo para detectar manipulación y soportar operaciones a corto plazo durante fallas.
- El control opcional de inmovilizador/desactivación mediante relé \(relé de combustible/eléctrico\) puede utilizarse a través de flujos de trabajo configurados en Plaspy para respuestas anti-robo.

## Visión técnica

| Conectividad | LTE Cat 1 \(SIMCom A7670 Series + AT6558R\), GSM/GPRS fallback |
| --- | --- |
| Bandas | LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66; GSM 850/900/1800/1900 MHz |
| Alimentación y Batería | Voltaje de entrada 9–90 VDC; Batería de respaldo 200 mAh / 3.7 V Li-Polymer \(alarma de corte de energía, operación a corto plazo\) |
| Interfaces | Micro USB \(firmware/configuración\); interfaz de alimentación de 8 hilos con RS485 para lector RFID externo; detección de ignición soportada; control opcional de relé para desactivación de combustible/eléctrico |
| GNSS | 66 canales GNSS; sensibilidad de rastreo -165 dBm; precisión de ubicación &lt;5 m CEP; TTFF: frío &lt;35 s, cálido &lt;1 s |
| Memoria y Consumo | Almacenamiento local hasta 2,000 registros; consumo operativo ~50 mA; modo de espera 2–3 mA |
| Antenas | Antenas GSM y GPS integradas |
| Protocolos y Gestión | Protocolo GT, TCP/IP GPRS Clase12; configurable vía PC-USB, GPRS, SMS; FOTA soportado |
| Dimensiones y Entorno | 78 × 40 × 15 mm; rango de temperatura de operación -20°C a +70°C; diseñado para instalaciones en vehículos |

## Casos de Uso

- Antirrobo de flotas e inmovilización: detectar movimientos no autorizados, recibir alarmas de corte de energía y desactivar de forma remota el suministro de combustible o energía mediante un relé opcional.
- Autorización y cumplimiento del conductor: hacer cumplir quién puede operar los vehículos con identificación de conductor por RFID y registrar los eventos del conductor en Plaspy para auditorías.
- Seguimiento de logística y vehículos municipales: seguimiento en tiempo real y telemetría para la optimización de rutas, monitorización de turnos y programación de mantenimiento.
- Despliegues multiproveedor con coches, motocicletas y e-bikes: amplio rango de entrada de 9–90 VDC y bajo consumo en espera hacen que TK08AL sea adecuado para flotas mixtas.
- Buffering de telemetría remota para cobertura intermitente: almacenamiento local de hasta 2,000 registros y actualizaciones por cambios de ángulo mantienen el historial hasta que la conectividad se restablece.

## Por qué elegir este rastreador con Plaspy

Emparejar el TK08AL con Plaspy ofrece a los operadores de flotas una solución práctica y centrada en la seguridad que combina posicionamiento GPS preciso y conectividad LTE/GSM robusta con controles a nivel de conductor. La identificación de conductor basada en RFID del TK08AL, la interfaz RS485 y la capacidad opcional de desactivación por relé facilitan hacer cumplir el acceso autorizado y ofrecen flujos de trabajo anti-robo potentes. Con modos de reposo configurables, almacenamiento a bordo y una batería de respaldo pequeña, el rastreador mantiene la continuidad de telemetría y alertas rápidas para SOS, velocidad, ignición y eventos de corte de energía.

Entre los beneficios operativos se incluyen telemetría optimizada en Plaspy para la gestión de flotas, alertas accionables para respuestas anti-robo y mantenimiento remoto mediante FOTA y configuración USB. Ya sea que necesites seguimiento en tiempo real, monitoreo de ignición y movimiento, flujos de trabajo de monitoreo de combustible mediante relés opcionales, o la integración de flujos de sensores adicionales \(Plaspy puede consolidar telemetría de múltiples fuentes junto con los datos de TK08AL\), este dispositivo ofrece una plataforma compacta y adaptable para implementaciones seguras y escalables.

