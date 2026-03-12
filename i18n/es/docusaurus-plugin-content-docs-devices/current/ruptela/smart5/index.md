---
slug: /ruptela/smart5
id: smart5
sidebar_label: Smart5
sidebar_class_name: menu_item_tracker
---
# Ruptela - Smart5

![Smart5](./tracker.png)

Smart5 es un rastreador GPS compacto y resistente, diseñado para una gestión de flota robusta y una integración profunda de datos del vehículo. Construido con LTE Cat 1 \(4G\) y una compatibilidad de respaldo con 2G, Smart5 ofrece un seguimiento en tiempo real y telemetría confiables en áreas de cobertura amplias y se integra a la perfección con Plaspy para proporcionar mapas en vivo, alertas y paneles de flota. Su capacidad para leer datos CANbus y OBD \(incluido CustomCAN\) lo hace especialmente útil para flotas que requieren información diagnóstica, monitorización de combustible y análisis de comportamiento del conductor.

Disponible en una carcasa delgada IP54 \(14 mm\) o un cuerpo robusto y sumergible IP68 \(21 mm\), Smart5 admite Bluetooth LE 5.0 para sensores y accesorios inalámbricos, un módulo GNSS u‑blox de fabricación suiza para posicionamiento multi‑constelación y un conjunto de I/O del vehículo para integraciones. Cuando se usa con Plaspy, Smart5 se convierte en una solución compatible con Plaspy para protección antirrobo, mantenimiento impulsado por telemetría y operaciones eficientes de la flota.

## Aspectos Clave

- Rastreador GPS compatible con Plaspy con LTE Cat 1 \(4G\) y respaldo 2G para un seguimiento en tiempo real y gestión de flota consistentes.
- Lectura de datos CANbus y OBD, incluido soporte CustomCAN, para capturar diagnósticos del vehículo, métricas de combustible y estado de ignición.
- Dos formatos — delgado IP54 \(14 mm\) para instalaciones discretas y robusto IP68 \(21 mm\) para entornos exigentes.
- Bluetooth LE 5.0 para conectar sensores y balizas inalámbricas para monitorizar la condición de la carga y telemetría auxiliar.
- Funciones de seguridad como detección de interferencias y alertas de interrupción de energía para respaldar flujos de trabajo anti‑robo en Plaspy.
- Funcionamiento de bajo consumo \(\<0,5 mA en modo de sueño profundo\) y una batería de respaldo interna de 180 mAh para informes fuera de línea y mayor resiliencia.
- Amplio rango de tensión \(9–32 V DC\) y un acelerómetro de 3 ejes para obtener información sobre el comportamiento del conductor y la conducción eficiente.

## Cómo Funciona con Plaspy

Smart5 transmite la ubicación y la telemetría del vehículo a Plaspy mediante su enlace celular y su memoria interna con búfer. Plaspy procesa determinaciones GNSS, tramas CAN/OBD, eventos del acelerómetro y lecturas de sensores Bluetooth para generar mapas en vivo, alertas de geovalla, informes de viaje y tableros de telemetría. La integración es sencilla: Smart5 envía mensajes de rastreo estandarizados y registros diagnósticos que Plaspy utiliza para seguimiento en tiempo real, informes históricos y alertas automáticas.

- Actualizaciones de ubicación y telemetría en tiempo real \(GNSS de múltiples constelaciones: GPS, GLONASS, Galileo\).
- Diagnóstico del vehículo vía CANbus/OBD y CustomCAN para estado de ignición, datos del motor y códigos de fallo.
- Monitoreo de combustible a partir de datos CAN/OBD y entradas analógicas para alimentar los informes de combustible y analítica de consumo en Plaspy.
- Capacidad de inmovilización remota mediante salidas digitales configurables \(DOUT\) cuando se despliega en flujos de trabajo de inmovilización.
- Soporte para sensores Bluetooth para temperatura, humedad o sensores de puertas para monitorizar la condición de la carga junto con la ubicación.
- Eventos de seguridad — detección de interferencias y alertas de interrupción de energía — aparecen en Plaspy como notificaciones inmediatas para la respuesta anti‑robo.
- Buffering local \(8 MB, ~36,000 registros\) garantiza la continuidad de datos y la subida a Plaspy tras pérdidas temporales de conectividad.

## Resumen Técnico

| Conectividad | LTE Cat 1 \(4G\) con respaldo 2G |
| --- | --- |
| Bandas | No especificadas \(dependiente de la región\) |
| Alimentación & Batería | Rango de entrada 9–32 V DC; batería interna de respaldo de 180 mAh; modo de sueño profundo \<0,5 mA |
| Interfaces | 1 × CANbus \(soporte CustomCAN\); 3 entradas digitales \(DIN\); 1 entrada analógica \(AIN\); 2 salidas digitales \(DOUT\); 1‑Wire |
| GNSS | Módulo GNSS u‑blox — GPS, GLONASS, Galileo \(multi‑constelación\) |
| Bluetooth | Bluetooth LE 5.0 para sensores y accesorios |
| Memoria | 8 MB internos \(~36,000 registros\) |
| Seguridad & Sensores | Detección de interferencias, alertas de interrupción de energía, acelerómetro de 3 ejes |
| Gestión Remota | No especificado |
| Formato | Carcasa delgada IP54 \(14 mm\) y carcasa robusta IP68 \(21 mm\) para instalaciones en vehículos y activos |

## Casos de Uso

- Antirrobo y inmovilización de flotas — alertas de interferencias y salidas digitales configurables \(DOUT\) respaldan flujos de trabajo de respuesta rápida en Plaspy.
- Gestión de flotas para automóviles, furgonetas y maquinaria pesada — telemetría CAN/OBD y rango de tensión amplio permiten monitoreo de flotas mixtas.
- Monitoreo de combustible y análisis de consumo — combinar datos CAN y entradas analógicas para obtener métricas de combustible en los informes de Plaspy.
- Monitoreo de mercancías refrigeradas y carga — sensores Bluetooth más GPS permiten a Plaspy rastrear cargas sensibles a la temperatura y el cumplimiento de rutas.
- Flotas de alquiler, leasing y construcción — opción IP68 robusta y memoria local aseguran la captura de datos en entornos exigentes.

## Por qué Elegir Este Rastreador con Plaspy

Smart5 está diseñado para ofrecer la conectividad y la resiliencia que requieren las flotas modernas, manteniendo una integración limpia con la plataforma de Plaspy. Su GNSS de múltiples constelaciones y la conectividad LTE Cat 1 proporcionan datos de ubicación precisos y oportunos para el seguimiento en tiempo real y la gestión de flotas. Las capacidades CANbus y OBD del dispositivo amplían la telemetría más allá de la posición para incluir diagnósticos, estado de ignición e información de combustible, datos que Plaspy aprovecha para el mantenimiento preventivo, la puntuación de conductores y el control de costos.

Entre los beneficios operativos se incluyen modo de espera de bajo consumo, almacenamiento en búfer interno para la captura ininterrumpida de datos y opciones de hardware para instalaciones discretas o robustas. Las funciones de seguridad, como la detección de interferencias y alertas de interrupción de energía, fortalecen los flujos de trabajo anti‑robo. Para flotas que requieren una solución de rastreo escalable y con telemetría, Smart5 como rastreador GPS compatible con Plaspy ofrece una combinación equilibrada de fiabilidad, configurabilidad y datos accionables para mejorar la utilización, reducir el tiempo de inactividad y proteger los activos.

