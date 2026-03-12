---
slug: /queclink/gv620mg
id: gv620mg
sidebar_label: GV620MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV620MG

![GV620MG](./tracker.png)

El GV620MG de Queclink es un rastreador GPS LTE para remolques robusto, diseñado para vehículos de servicio pesado: remolques, camiones cisterna, unidades frigoríficas y camiones de plataforma. Construido para condiciones de transporte exigentes, el GV620MG es compatible con Plaspy desde el inicio, ofreciendo seguimiento en tiempo real y telemetría confiables para la gestión de flotas, protección antirrobo y monitorización impulsada por sensores a través de redes LTE Cat M1/NB2 globales con retroceso a 2G.

Con sellado IP67, una solución de antena integrada única y una batería interna de alta capacidad, el GV620MG mantiene visibles los remolques en la plataforma Plaspy incluso cuando se pierde la alimentación externa. Utilice el dispositivo para capturar la posición GNSS, el encendido y el estado de las entradas, eventos del acelerómetro y datos de sensores BLE; todo se entrega a Plaspy para alertas, geocercas, informes y control remoto de salidas digitales.

## Aspectos clave

- Rastreador GPS compatible con Plaspy optimizado para la gestión de flotas de remolques y vehículos pesados.
- Conectividad global LTE Cat M1 / NB2 con retroceso a 2G para una cobertura de red amplia y un seguimiento en tiempo real fiable.
- Carcasa resistente IP67 y antenas internas que simplifican la instalación en remolques, camiones cisterna y unidades frigoríficas.
- Batería interna de larga duración \(2 × 18650 Li‑ion, 3.7 V, 5800 mAh\); hasta 120 días en modo de espera para seguimiento continuo ante pérdida de suministro.
- Receptor GNSS de u‑blox todo en uno \(GPS/GLONASS/Galileo/Beidou\) con precisión CEP &lt; 2 m y TTFF rápido para datos de ubicación precisos.
- BLE 5.0 para sensores inalámbricos de temperatura/humedad, llaveros y candados BLE; extenso conjunto de E/S cableadas para controladores de refrigeración e integración telemétrica.
- Informes configurables, gestión de geocercas, alertas de movimiento/velocidad impulsadas por el acelerómetro y control remoto OTA de salidas digitales para casos de inmovilizador.

## Cómo funciona con Plaspy

El GV620MG envía posiciones GNSS, telemetría y estados de sensor a Plaspy vía LTE Cat M1/NB2 \(con retroceso a 2G\). Plaspy recibe la ubicación, eventos de entradas/salidas, lecturas de sensores BLE y estado de batería/celular para ofrecer seguimiento en tiempo real, alertas e informes históricos. Los administradores pueden configurar intervalos de informes, geocercas y umbrales de alarma desde Plaspy y enviar comandos a la unidad para control remoto.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy para seguimiento en mapa en vivo y reproducción de historial.
- Estado de encendido/ignición y entradas/salidas digitales reportadas a Plaspy para monitoreo del estado del motor y control remoto.
- La telemetría de combustible y sensores analógicos puede integrarse a través de la entrada analógica y mostrarse en los paneles de Plaspy cuando se combine con sensores compatibles.
- El control remoto OTA de salidas digitales habilita flujos de trabajo tipo inmovilizador y conmutación remota desde Plaspy.
- Sensores Bluetooth \(BLE 5.0\) proporcionan datos de temperatura/humedad y proximidad a Plaspy para la monitorización de remolques refrigerados y control de acceso.

## Visión técnica

| Modelo | GV620MG |
| --- | --- |
| Fabricante | Queclink |
| Conectividad | Global LTE Cat M1 \(eMTC\) / NB2 con retroceso a 2G; ancho de banda eMTC/NB2 apto para telemetría y reporting periódico |
| Bandas | Variantes globales LTE Cat M1/NB2 \(las bandas específicas dependen del SKU desplegado y la región\) |
| Energía y batería | Paquete de batería interna: 2 × 18650 Li‑ion \(3.7 V, 5800 mAh\); hasta 120 días en modo de espera \(perfiles de informe típicos\); rango de operación DC 8V–32V |
| Interfaces | 1 × RS232 serial, 1 × entrada analógica, 1 × entrada digital positiva \(ignición\), hasta 4 entradas de disparo negativas o 4 salidas de drenaje abierto, 1‑wire hasta 8 canales de temperatura, salida de 3.3V |
| GNSS | Receptor GNSS de u‑blox todo en uno que admite GPS, GLONASS, Galileo, Beidou; precisión de posición autónoma &lt;2 m CEP; sensibilidad \(arranque en frío -148 dBm, arranque en caliente -160 dBm, seguimiento -167 dBm\); TTFF frío ~24 s, caliente ~1 s |
| Bluetooth | BLE 5.0 para sensores inalámbricos, llaveros y candados BLE |
| Gestión remota | Informes configurables, gestión de geocercas y control remoto OTA de salidas digitales |
| Ambiental | Carcasa IP67 impermeable; rango de temperatura de operación -30°C a +80°C |
| Forma y uso | Rastreador compacto y robusto diseñado para remolques, camiones cisterna, unidades frigoríficas y plataformas; antenas internas de celular, GNSS y BLE para instalación simplificada |
| Certificaciones | FCC, Verizon, PTCRB, AT&T, CE, T-Mobile, Anatel y otros \(según región/variante\) |

## Casos de uso

- Gestión de flotas para remolques y camiones de plataforma — ubicación en tiempo real, informes de kilometraje y reproducción de rutas en Plaspy.
- Monitorización de remolques refrigerados — sensores BLE de temperatura y canales de temperatura 1-wire integrados en Plaspy para cumplimiento y seguridad de la carga.
- Cisternas y transporte de combustible/químicos — carcasa resistente IP67 y interfaces de telemetría que permiten un rastreo seguro y continuo en entornos duros.
- Protección anti-robo e inmovilización — alertas de movimiento/velocidad, alarmas de geocerca y control OTA de salidas para implementaciones de inmovilizador remoto vía Plaspy.
- Conjuntos de accesorios y sensores — RS232, E/S analógica y digital permiten la integración con controladores de refrigeración, sensores de combustible y dispositivos de telemetría de terceros.

## Por qué elegir este rastreador con Plaspy

El GV620MG ofrece un equilibrio entre hardware robusto y telemetría flexible diseñada para despliegues exigentes de remolques y vehículos pesados. Cuando se combina con Plaspy, la unidad convierte datos GNSS de alta precisión y sensores BLE en conocimientos accionables — apoyando el seguimiento en tiempo real, la gestión de flotas, medidas antirrobo y monitorización impulsada por sensores como temperatura y combustible. Su larga vida de batería interna, su amplio rango de voltaje y su carcasa impermeable minimizan el tiempo de inactividad y la complejidad de instalación para los operadores de transporte.

Opte por el GV620MG con Plaspy para obtener una solución probada y escalable que combine un seguimiento GPS preciso, telemetría robusta y capacidades de control remoto. Ya sea que necesite actualizaciones continuas de posición, informes basados en el estado de ignición o integración de sensores BLE para cargas refrigeradas, este rastreador compatible con Plaspy está diseñado para mantener visibles los remolques y asegurar los activos en flotas globales.

