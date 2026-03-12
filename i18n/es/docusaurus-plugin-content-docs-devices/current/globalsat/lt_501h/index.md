---
slug: /globalsat/lt_501h
id: lt_501h
sidebar_label: LT-501H
sidebar_class_name: menu_item_tracker
---
# GlobalSat - LT-501H

![LT-501H](./tracker.jpg)

La serie LT-501H / LT-501E es un rastreador compacto LoRa GPS diseñado para una larga vida útil y el seguimiento de personas y pequeños activos en áreas extensas. Compatible con Plaspy de forma nativa mediante LoRaWAN™, la familia LT-501 ofrece localización en interiores y exteriores, soporte para balizas BLE y modos de informe configurables para aplicaciones que requieren telemetría fiable y operación de bajo consumo.

Construido alrededor de un radio LoRa Semtech SX-1276 y un microcontrolador STM32, el LT-501 es compatible con Helium y otras redes LoRaWAN en operación de Clase A y Clase C. Su formato compacto, fuente de alimentación interna recargable con batería opcional reemplazable de 19A, alertas sonoras y detección de movimiento lo hacen ideal para la seguridad de trabajadores solitarios, monitoreo antirrobo y flujos de trabajo de gestión de flotas cuando se integra en Plaspy para rastreo en tiempo real y generación de informes centralizados.

## Puntos clave

- Rastreador LoRaWAN compatible con Plaspy — soporta Helium y redes LoRaWAN estándar para una ingestión en la nube sencilla.
- Posicionamiento interior/exterior — antena GPS tipo patch y BLE integrado para posicionamiento interior basado en balizas y rastreo de ubicación híbrido.
- Larga duración de la batería — optimizado para transmisiones de bajo consumo con una autonomía estimada de hasta 130 días \(intervalo GPS de 5 minutos, solo de referencia\).
- Diseño compacto y robusto — protección IPX7, tapa sellada de goma y carcasa ligera de 35 g para uso en wearables y en pequeños activos.
- Alertas audibles y visuales — zumbador integrado y múltiples LEDs que respaldan informes de ayuda y flujos de notificación locales.
- Telemetría con detección de movimiento — acelerómetro de 3 ejes integrado para detección de movimiento, manipulación y actividad.
- Variantes de conectividad flexibles — opciones de frecuencia para mercados US/AS y EU \(LT-501RH / LT-501RE\) con antena interna y opción de antena externa MMCX.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el LT-501 ofrece posiciones GPS periódicas, detecciones de balizas BLE y telemetría de movimiento vía LoRaWAN hacia su espacio de trabajo en Plaspy. Plaspy procesa las transmisiones del dispositivo, decodifica las cargas útiles y ofrece rastreo en tiempo real, alertas, visualización de mapas e informes históricos. La configuración remota desde Plaspy puede cambiar entre modos de informe: actualizaciones programadas regulares y transmisiones casi en tiempo real, siempre que lo permitan la red y la configuración del dispositivo.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas por LoRaWAN a Plaspy para el rastreo en mapas y el historial.
- Datos de balizas BLE para mejorar el posicionamiento interior y eventos de proximidad que utiliza Plaspy.
- Informes de movimiento y ayuda \(acelerómetro de 3 ejes + botón de función\) generan alertas y flujos de incidentes en Plaspy.
- Soporte de geo-fencing en el servidor — Plaspy puede evaluar los datos de ubicación para generar alertas de entrada/salida de geocerca.
- Mensajes de estado como batería baja, apagado y otros son enviados a Plaspy para el monitoreo de la salud del dispositivo.

## Visión general técnica

| Conectividad | LoRaWAN™ \(Clase A / Clase C\), chipset LoRa Semtech SX-1276; compatible con Helium |
| --- | --- |
| Bandas | LT-501RH: variantes para US 915 MHz / AS 923 MHz; LT-501RE: EU 868 MHz |
| Alimentación y Batería | Sistema de energía interna recargable, batería opcional reemplazable de 19A; puerto Micro USB para carga/datos; tensión de operación DC 3.3–4.3 V, USB 4.5–5.5 V; autonomía estimada de hasta 130 días \(intervalo GPS de 5 minutos, referencia\) |
| Interfaces | Botón de alimentación/reinicio, botón de función/ayuda, zumbador para alertas sonoras, múltiples LEDs \(Alimentación, GPS, LoRa TX, BLE TX\), watchdog integrado |
| GNSS | Recepción GPS mediante antena patch \(18 × 18 × 2 mm\) con opción MMCX para antena GPS externa |
| Bluetooth | BLE Nordic \(modo esclavo\) para posicionamiento interior basado en balizas; alcance BLE ≈ 35 m \(entorno abierto\) |
| Rendimiento de radio | Sensibilidad de recepción LoRa ≈ -128 dBm a 980 bps; distancia típica de transmisión LoRa ≈ 1–10 km a 980 bps \(dependiente del entorno\) |
| Ambiental y durabilidad | IPX7 con tapa sellada de goma; temperatura operativa con batería: -20 a 60°C; almacenamiento -20 a 80°C; 5–95% de humedad no condensante |
| Dimensiones y peso | 63.3 × 43.0 × 15.5 ±0.15 mm; peso ≈ 35 ±2 g |
| Certificaciones y accesorios | CE, FCC, Telec, Certificación LoRaWAN, Certificación ThingPark; incluye cable Micro USB; batería opcional de 19A, antena GPS externa, placa de montaje de acero de 3 mm |

## Casos de uso

- Seguridad de trabajadores solitarios — seguimiento wearable con botón de ayuda y alertas sonoras para vigilancia remota mediante Plaspy.
- Seguridad personal y anti-robo — rastreador GPS compacto para equipaje, equipos o pertenencias con reportes de largo alcance y bajo consumo.
- Monitoreo de activos en áreas extensas — la cobertura LoRaWAN y la compatibilidad con Helium permiten rastreo a largas distancias sin necesidad de recargas frecuentes.
- Tracking híbrido interior/exterior — soporte para balizas BLE para eventos de proximidad en interiores, combinado con GNSS en exteriores para un contexto de ubicación continuo.
- Telemetría y monitorización de estado — eventos de movimiento, alarmas de energía y telemetría de salud del dispositivo, adecuada para integrarse en paneles de gestión de flotas en Plaspy.

## Por qué elegir este rastreador con Plaspy

La serie LT-501 ofrece una combinación equilibrada de conectividad LoRaWAN de largo alcance, posicionamiento interior asistido por BLE y un hardware compacto y robusto que se integra de forma limpia con Plaspy. Para organizaciones que requieren rastreadores GPS de bajo consumo para personas y pequeños activos, el LT-501 proporciona la telemetría que Plaspy necesita para entregar rastreo en tiempo real, alertas de incidentes e informes históricos. Sus certificaciones regulatorias y accesorios opcionales lo hacen adecuado para despliegues escalados donde la conformidad y la flexibilidad de implementación son importantes.

Nota sobre características complementarias: los usuarios de Plaspy suelen combinar las ubicaciones y feeds de movimiento del LT-501 con sensores adicionales de vehículos o activos para soportar flujos de trabajo como monitorización de ignición, control de inmovilizador o monitoreo de combustible. El LT-501 se centra en GNSS, balizas BLE y telemetría de movimiento y energía; las interfaces de ignición, inmovilizador y sensores de combustible directos requerirían hardware adicional o pasos de integración.

