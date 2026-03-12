---
slug: /concox/x3
id: x3
sidebar_label: X3
sidebar_class_name: menu_item_tracker
---
# Concox - X3

![X3](./tracker.png)

El X3 es un rastreador GPS compacto y multifuncional para vehículos, diseñado para despliegues compatibles con Plaspy que exigen un seguimiento en tiempo real fiable, gestión de flotas y vigilancia de seguridad. Construido para instalaciones en vehículos, el X3 ofrece informes de ubicación precisos \(GPS + BDS + LBS\), comunicación bidireccional y análisis del comportamiento de conducción para ayudar a las flotas a reducir riesgos, mejorar la seguridad del conductor y acelerar la respuesta ante incidentes.

Como rastreador GPS compatible con Plaspy, el X3 alimenta telemetría y datos de eventos en tiempo real a dashboards y flujos de trabajo de Plaspy, de modo que los operadores pueden monitorizar los vehículos, activar alertas y actuar de forma remota ante incidentes como robo o movimiento no autorizado. Sus interfaces periféricas flexibles \(RS232/TTL, salidas de relé, micrófono externo\) y su amplio rango de entrada de 9–36 VDC lo convierten en una opción versátil para operadores de flotas, proveedores logísticos e instalaciones de seguridad.

## Aspectos Clave

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real fiable y integración de gestión de flotas.
- GNSS de alta precisión \(GPS + BDS + LBS\) con precisión de posicionamiento &lt;2.5 m CEP para ubicaciones de vehículos precisas.
- Conectividad GSM quad-band \(850/900/1800/1900 MHz\) para amplia cobertura celular en las regiones.
- Control remoto de inmovilización / corte vía relé para respuesta anti-robo y aislamiento de energía.
- Analítica de comportamiento de conducción: aceleración brusca, frenado brusco, giro brusco y detección de colisiones para respaldar programas de seguridad.
- Interfaces de E/S flexibles: RS232 y TTL; entradas digitales ACC y SOS; además de múltiples salidas para relés y zumbadores.
- Acelerómetro integrado \(sensor G\) y monitoreo de voz en cabina \(micrófono externo\) para verificación de incidentes y comunicación bidireccional.

## Cómo funciona con Plaspy

El X3 transmite posiciones GNSS y telemetría del vehículo a través de GSM a Plaspy, donde el seguimiento en tiempo real, las alertas y los informes históricos están disponibles en una interfaz unificada. Plaspy ingiere señales de estado \(ACC/encendido, SOS, entradas/salidas\) y eventos de comportamiento de conducción desde el X3 para habilitar notificaciones automáticas, aplicación de geovallas y generación de informes operativos. El control remoto de relé desde Plaspy permite acciones tipo inmovilizador \(corte de combustible/energía\) cuando se requiere intervención rápida.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy para visualización en mapa y seguimiento.
- Informes de encendido/ACC y entradas digitales para la detección de trayectos y reglas basadas en el encendido.
- Control remoto de inmovilización/corte vía salida de relé para intervención anti-robo.
- Alertas de comportamiento de conducción \(aceleración brusca, frenado brusco, giro brusco y colisión\) enviadas como eventos a Plaspy.
- Alertas de geocerca, movimiento y desconexión de energía para reducir el tiempo de respuesta y respaldar la seguridad de la flota.
- Monitoreo de voz y capacidad de comunicación bidireccional para verificar incidentes y facilitar las comunicaciones con el conductor.
- Cuando se requiere monitoreo de combustible, Plaspy puede correlacionar las señales de E/S del X3 y las entradas de sensores externos \(donde instalados\) para generar flujos de trabajo de monitoreo de combustible.
- Aunque el X3 no incluye sensores Bluetooth internos, Plaspy puede agregar datos de BLE/sensores de terceros junto con la telemetría del X3 para proporcionar una imagen telemática completa donde sea compatible con la implementación.

## Visión general técnica

| Conectividad | GSM quad-band \(850 / 900 / 1800 / 1900 MHz\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz \(quad-band GSM\) |
| Potencia y batería | Batería de respaldo Li-Polymer de 450 mAh / 3.7 V; tensión de entrada externa 9–36 VDC; alertas de bajo voltaje soportadas |
| Interfaces | Interfaces de accesorios RS232 y TTL; entrada de micrófono externa; Relé, Output1, Output2; ACC, Entradas y SOS digitales; ranura SIM estándar; indicadores LED \(GNSS Azul, Celular Verde, Alimentación Rojo\) |
| GNSS | GPS + BDS + LBS; precisión de posicionamiento &lt;2.5 m CEP; sensibilidad de seguimiento -165 dBm; sensibilidad de adquisición -148 dBm; TTFF arranque en caliente ≤1 s, arranque en frío ≤35 s |
| Almacenamiento de datos e indicadores | Almacenamiento a bordo de 32 + 32 Mb; indicadores LED para GNSS, Celular y Alimentación |
| E/S digital | Entradas: ACC, Entrada, SOS. Salidas: Relé, Output1, Output2. Soporta corte remoto y control de zumbador por sobrevelocidad. |
| Sensores integrados | Acelerómetro \(sensor G\) para detección de movimiento y comportamiento de conducción; monitoreo de voz \(alcance efectivo ≤5 m\) vía micrófono externo |
| Formato | 80.9 × 55.8 × 23.4 mm, 95 g |
| Rango de operación | Temperatura de operación –20 °C a +70 °C |
| Gestión remota | Las especificaciones de gestión remota \(FOTA, herramientas web\) no están detalladas en la descripción del dispositivo |

## Casos de uso

- Antirrobo de flota e inmovilización rápida — utilice el corte basado en relé combinado con alertas de Plaspy para asegurar los vehículos tras un incidente.
- Seguridad y cumplimiento del conductor — monitorizar aceleración brusca, frenado y giro para capacitar a los conductores y reducir riesgos.
- Logística de camiones y seguimiento de entregas — el seguimiento en tiempo real y la geocerca ayudan a gestionar rutas, ETA y eventos de custodia.
- Verificación de incidentes en cabina — micrófono externo y comunicación bidireccional proporcionan contexto de voz para accidentes o disputas.
- Telemática de activos mixtos — integre la telemetría del X3 en Plaspy para consolidar ubicación, encendido y alertas basadas en sensores en toda la flota.

## Por qué elegir este rastreador con Plaspy

El X3 ofrece una combinación equilibrada de posicionamiento GNSS preciso, conectividad GSM robusta e interfaces de hardware flexibles que lo convierten en una opción práctica para despliegues compatibles con Plaspy. Su formato compacto, su amplio rango de voltaje de entrada y el soporte RS232/TTL simplifican la instalación en diferentes tipos de vehículos. Al enviar la telemetría del X3 a Plaspy, se habilita un seguimiento en tiempo real centralizado, informes de telemetría y flujos de trabajo automatizados de anti-robo, lo que ayuda a las operaciones a minimizar el tiempo de inactividad y mejorar la seguridad de los activos. Para flotas que requieren verificación de voz, análisis de comportamiento de conducción e integración de E/S personalizable, el X3 proporciona datos confiables a nivel de vehículo que Plaspy puede convertir en conocimientos prácticos para una gestión de flota más segura y eficiente.

