---
slug: /gosafe/gat3000
id: gat3000
sidebar_label: GAT3000
sidebar_class_name: menu_item_tracker
---
# Gosafe - GAT3000

![GAT3000](./tracker.png)

El GAT3000 Solar Powered Tracker es un rastreador GPS compatible con Plaspy, diseñado para el monitoreo de activos al aire libre a largo plazo. Construido para remolques, contenedores, equipos pesados y otros activos de alto valor, el GAT3000 combina una batería Li‑ion recargable de 10000mAh con un panel solar de 6 VDC para ofrecer un tiempo de espera extendido y actualizaciones de ubicación frecuentes y fiables para seguimiento en tiempo real y gestión de flotas.

Con una carcasa con clasificación IP67, GNSS multiconstelación, conectividad celular LTE Cat-1 y BLE 4.2 para sensores Bluetooth, el GAT3000 ofrece telemetría robusta, monitorización anti-robo e integración sencilla con Plaspy para alertas, informes y gestión remota del dispositivo. Su bajo consumo y la configuración por aire lo hacen ideal para implementaciones escalables donde la disponibilidad y la calidad de los datos son cruciales.

## Aspectos clave

- Rastreador GPS compatible con Plaspy optimizado para implementaciones de activos a largo plazo y flujos de trabajo de gestión de flotas.
- Operación asistida por energía solar con una batería Li‑ion recargable de 10000mAh para un standby extendido y reportes frecuentes \(más de 15 mensajes/día en condiciones solares normales\).
- GNSS de alta precisión multiconstelación \(GPS/GLONASS/Galileo/BeiDou\) con soporte SBAS \(~2.0 m de precisión en cielo abierto\) y excelente sensibilidad \(-162 dBm\) para fijaciones de ubicación fiables.
- Conectividad celular LTE Cat-1 global con respaldo GSM/GPRS y opciones de dual-SIM para maximizar la cobertura y la fiabilidad del roaming.
- Carcasa robusta con clasificación IP67 y amplio rango de temperaturas de operación para casos de uso al aire libre de anti-robo y rastreo de activos.
- Soporte BLE 4.2 para sensores Bluetooth \(temperatura, humedad, sensores de puerta/apertura, etc.\) y un sensor de proximidad/manipulación a bordo para activar alertas anti-robo.
- Perfiles de bajo consumo \(modo de sueño profundo a rastreo activo\) y E/S configurables para integrarse con telemetría externa o circuitos de inmovilización cuando sea necesario.
- Configuración por aire e integración con la plataforma listos — admite actualizaciones de firmware remotas y flujos de gestión del dispositivo.

## Cómo funciona con Plaspy

El GAT3000 transmite posiciones GNSS y telemetría a Plaspy mediante LTE Cat-1 \(con respaldo GSM/GPRS\) sobre TCP/UDP o SMS. Plaspy ingiere ubicaciones, eventos del acelerómetro, alertas de manipulación y lecturas de sensores Bluetooth para que puedas realizar seguimiento en tiempo real, configurar alarmas de geocerca y generar informes de flotas. La configuración por aire permite a los administradores de Plaspy ajustar intervalos de reporte, umbrales y la lógica de E/S de forma remota.

- Actualizaciones de ubicación y telemetría en tiempo real: los datos GNSS multiconstelación se envían a Plaspy para seguimiento en el mapa en vivo y reproducción del historial.
- Eventos de manipulación y movimiento: el sensor de proximidad/manipulación a bordo y un acelerómetro 3D reportan eventos de manipulación o impactos como alertas a Plaspy.
- Integración de sensores Bluetooth: BLE 4.2 permite sensores de temperatura, humedad y puerta/apertura para trasladar la telemetría ambiental a los tableros de Plaspy.
- E/S y telemetría de sensores externos: entradas/salidas configurables pueden transmitir eventos digitales o conectarse a sensores auxiliares — útil para monitoreo de condiciones y flujos de anti-robo.
- Comandos y actualizaciones remotas: Plaspy puede enviar cambios de configuración y gestionar el firmware de forma remota mediante OTA, vinculada a las interfaces de gestión del dispositivo.

## Resumen técnico

| Conectividad | LTE Cat-1 \(TCP/UDP/SMS\), respaldo a GSM/GPRS |
| --- | --- |
| Bands | B1/B2/B3/B4/B5/B7/B8/B12/B13/B17/B18/B19/B20/B25/B26/B28/B66 |
| Alimentación y batería | Batería Li‑ion recargable de 10000mAh + panel solar de 6 VDC; más de 15 mensajes/día típicos en condiciones solares normales |
| Interfaces | Entradas/salidas configurables, sensor de proximidad/manipulación, acelerómetro 3D, LEDs de estado \(GPS, celular, Bluetooth\) |
| GNSS | GPS/GLONASS/Galileo/BeiDou con soporte SBAS \(~2.0 m de precisión en cielo despejado\); sensibilidad de seguimiento ~-162 dBm |
| Bluetooth | BLE 4.2 para sensores Bluetooth \(temperatura, humedad, sensores de puerta/apertura, etc.\) |
| SIM y Roaming | Capacidad dual-SIM; opciones de SIM interna 4FF o SIM M2M embebida para roaming global |
| Consumo de energía | Sueño profundo ~400 µA @12V; sueño con radio activo ~5 mA @12V; rastreo activo ~60 mA @12V |
| Gestión remota | Configuración por aire; se integra con Gosafe GEM/GICUS para actualizaciones remotas de firmware y gestión del dispositivo |
| Factor de forma y entorno | 354 x 94 x 25.4 mm, ~700 g; IP67; temperatura de funcionamiento -30 a +60 °C \(alimentación principal\), -20 a +60 °C \(batería interna\) |

## Casos de uso

- Seguimiento de remolques, contenedores y cargas — larga autonomía con recarga solar minimiza el mantenimiento mientras alimenta ubicaciones de activos en tiempo real a Plaspy.
- Monitoreo de equipos pesados y maquinaria — combine GPS, eventos del acelerómetro y sensores BLE para flujos de utilización y anti-robo.
- Anti-robo de activos remotos y detección de manipulación — el sensor de manipulación y las E/S configurables permiten alertas inmediatas y acciones de intervención a través de Plaspy.
- Monitoreo de condiciones ambientales — combine sensores BLE de temperatura y humedad para rastrear carga sensible y registrar telemetría en los informes de Plaspy.
- Telemetría de flota y diagnóstico remoto — envía ubicación y estado del dispositivo a Plaspy para una gestión centralizada de la flota y la planificación de mantenimiento preventivo.

## Por qué elegir este rastreador con Plaspy

Emparejar el GAT3000 con Plaspy ofrece una vía práctica hacia un seguimiento y telemetría en tiempo real, confiables y asistidos por energía solar. El diseño robusto con IP67, la precisión GNSS multiconstelación y la conectividad LTE Cat-1 proporcionan la base para servicios de ubicación precisos y una gestión de flotas a gran escala. Los modos de bajo consumo y una batería amplia con soporte solar reducen los costos operativos y las visitas de servicio en campo, mientras que BLE 4.2 y E/S configurables amplían las opciones de telemetría, desde monitoreo de temperatura hasta sensores de puertas e integraciones externas como inmovilizadores cuando exista cableado disponible.

Para operadores enfocados en la protección anti-robo, la visión de utilización y la telemetría ambiental, la detección de manipulación del GAT3000, los eventos del acelerómetro y el soporte de sensores BLE, combinados con las capacidades de alertas e informes de Plaspy, producen inteligencia accionable sin necesidad de complejos mantenimientos en sitio. La configuración remota y las actualizaciones por aire mantienen una flota dispersa actualizada y gestionable, haciendo de este rastreador GPS una opción fiable y compatible con Plaspy para programas de seguimiento de activos exigentes.

