---
slug: /suntech/st4345
id: st4345
sidebar_label: ST4345
sidebar_class_name: menu_item_tracker
---
# Suntech - ST4345

![ST4345](./tracker.jpg)

La serie ST4345 es un rastreador GPS compacto, con clasificación IP67, diseñado para telemática robusta donde la ocultación, el bajo consumo y una conectividad celular fiable son esenciales. Compatible con Plaspy desde el primer momento, el ST4345 se conecta a redes LTE Cat M1, NB‑IoT y 2G para ofrecer seguimiento en tiempo real, telemetría e informes avanzados de eventos para flotas, remolques, motocicletas y activos de alto valor.

Disponible en varias variantes \(ST4345R, ST4345LB, ST4345LC\), este rastreador de vehículos robusto combina una huella pequeña con una amplia tolerancia a la temperatura, una antena GNSS interna y entradas/salidas flexibles para soportar detección de encendido, sensores externos e integración con inmovilizador o circuitos de alarma a través de interfaces cableadas. Los usuarios de Plaspy obtienen acceso inmediato a datos de posición precisos, geocercas configurables, informes en modo de conducción y diagnóstico remoto a través de protocolos estándar.

## Aspectos clave

- Rastreador GPS compatible con Plaspy para una integración fluida en sus flujos de trabajo de seguimiento en tiempo real y gestión de flotas.
- Conectividad celular en múltiples modos: LTE Cat M1, NB‑IoT y EGPRS de reserva \(2G\) para una cobertura regional amplia y telemetría fiable.
- Carcasa robusta IP67 y amplio rango de temperatura de operación \(-30°C a +80°C\) para instalaciones duraderas en vehículos, remolques y motocicletas.
- Factor de forma compacto y ocultable \(74 × 45 × 19.5 mm, 102 g con cable de eventos\) que facilita una instalación discreta y mitiga el robo.
- E/S cableadas flexibles \(5 u 8, según el modelo\) y RS232 opcional para interfazar con el encendido, alarma, sensores y circuitos externos de inmovilización.
- Diseño de bajo consumo con batería de respaldo recargable \(3.7V Ni‑MH, 450 mAh\) y corrientes de reposo ultrabajas adecuadas para despliegues a largo plazo.
- Funciones telemáticas avanzadas como Análisis de Patrones de Conducción \(DPA\), Reconstrucción de Incidentes \(CR\) y detección de interferencias — todo reportable a través de Plaspy para obtener insights accionables, gestión de flotas escalable y diagnósticos remotos eficientes mediante el soporte de servidor de mantenimiento.
- Opción BLE en modelos selectos \(variantes LB/LC\) que permite la conexión con sensores y balizas Bluetooth para monitoreo de temperatura, proximidad o accesorios.

## Cómo funciona con Plaspy

El ST4345 intercambia posiciones GNSS, telemetría y datos de eventos con Plaspy mediante informes TCP/UDP estándar. Plaspy utiliza esos mensajes para proporcionar mapas en vivo, reproducción histórica, alertas e informes detallados. La integración es sencilla: el dispositivo envía actualizaciones periódicas de ubicación, eventos de movimiento y banderas de estado que Plaspy procesa para seguimiento en tiempo real y flujos de trabajo automatizados.

- Actualizaciones de ubicación y telemetría en tiempo real \(posición GNSS, velocidad, rumbo y estado del sistema\).
- Detección de ignición basada en el encendido y el movimiento \(entradas de voltaje y movimiento\) para un informe preciso de encendido/apagado del motor.
- Alertas de geocerca configurables \(circulares y poligonales\) e informes basados en el modo de conducción disponibles a través de los paneles de Plaspy.
- La telemetría de combustible y de otros parámetros del vehículo puede transmitirse cuando está conectado a sensores del vehículo a través de las E/S cableadas para monitoreo de combustible y análisis de eficiencia.
- El soporte BLE opcional en modelos LB/LC permite la integración con sensores y balizas Bluetooth; el control de inmovilizador o alarma externa es posible mediante interfaces cableadas.

## Panorama técnico

| Conectividad | LTE Cat M1, NB‑IoT \(variantes NB2\) y EGPRS \(2G\) con transmisión TCP/UDP |
| --- | --- |
| Bandas | Cobertura regional NB2 y LTE Cat M1 \(ejemplos: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B25/B26/B27/B28/B66/B71/B85 cuando aplique\) y EGPRS 850/900/1800/1900 MHz |
| Alimentación & Batería | Entrada DC 8–33 V con protección contra inversión; batería de respaldo interna recargable Ni‑MH 3.7V, 450 mAh; consumo típico 70–80 mA @12 V activo, &lt;4 mA en reposo, &lt;2 mA en reposo profundo |
| Interfaces | Hasta 8 conexiones E/S cableadas \(según modelo: 8 u 5\); RS232 opcional en ST4345R; dos LEDs \(Network, GPS\); sensor de movimiento Bosch SMA131; admite detección de ignición virtual e interfaz con inmovilizador/alarma externa a través de E/S |
| GNSS | GPS y GLONASS con SBAS \(WAAS/EGNOS/MASA\), actualización a 1 Hz, precisión típica ±3 m CEP \(50%\); TTFF en frío \<35 s \(15 s con EASYTM\), en cálido \<30 s \(5 s con EASYTM\), en caliente \<1 s |
| Bluetooth | BLE opcional disponible en variantes ST4345LB y ST4345LC para conectividad con sensores y balizas |
| Gestión remota | Soporte de servidor de mantenimiento para diagnóstico y configuración remotos |
| Formato y Durabilidad | Compacto 74 × 45 × 19.5 mm, 102 g con cable de eventos; IP67; amplio rango de temperatura -30°C a +80°C |
| Certificaciones | FCC, IC y PTCRB certificados para numerosos despliegues regionales |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, informes de estilo de conducción y alertas de mantenimiento para flotas de vehículos ligeros y pesados.
- Antirrobo e inmovilización: instalación oculta con E/S cableadas para interfazar con circuitos de alarma y habilitar control remoto del inmovilizador a través de flujos de trabajo de Plaspy.
- Monitoreo de remolques y contenedores: conectividad LTE/NB‑IoT de bajo consumo y protección IP67 para visibilidad de activos a largo plazo.
- Rastreo de motocicletas y vehículos todoterreno: formato compacto y amplia tolerancia a la temperatura para aplicaciones exigentes de dos ruedas.
- Rastreo de activos con sensores: los modelos con BLE admiten sensores de temperatura, proximidad o carga para telemetría multimodal.

## Por qué elegir este rastreador con Plaspy

Cuando se combina con Plaspy, la serie ST4345 ofrece una solución equilibrada para organizaciones que necesitan seguimiento GPS fiable y de bajo consumo, junto con telemetría rica, sin hardware voluminoso. Su pila celular multi-radio garantiza conectividad a través de LTE Cat M1, NB‑IoT y fallback 2G, manteniendo los dispositivos en línea en regiones diversas. El diseño compacto con clasificación IP67 facilita instalaciones discretas para aplicaciones anti‑robo, mientras que las E/S flexibles y el soporte opcional de BLE permiten agregar sensores de combustible, alarmas y interfaces de inmovilización. Funciones avanzadas como Análisis de Patrones de Conducción, Reconstrucción de Incidentes y detección de interferencias alimentan directamente a Plaspy para obtener insights accionables, gestión de flotas escalable y diagnósticos remotos eficientes a través del soporte de servidor de mantenimiento. Elija el ST4345 con Plaspy para obtener ubicación precisa, informes configurables y hardware duradero para despliegues telemáticos exigentes.

