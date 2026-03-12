---
slug: /gosafe/g1rus
id: g1rus
sidebar_label: G1RUS
sidebar_class_name: menu_item_tracker
---
# Gosafe - G1RUS

![G1RUS](./tracker.png)

El G1RUS es un rastreador GPS diseñado para despliegues prolongados sin supervisión en remolques, contenedores y activos de alto valor. Compatible con Plaspy desde el inicio, G1RUS combina una plataforma de hardware de consumo extremadamente bajo con una carcasa robusta y opciones de alimentación flexibles para que los gestores de flota y propietarios de activos puedan desplegar soluciones de rastreo en tiempo real y telemetría confiables que operan durante meses o años sin mantenimiento.

Con comunicaciones GSM cuádruple banda y variantes 3G/LTE opcionales, un motor GNSS de 56 canales u‑blox, entradas/salidas digitales configurables y un módulo Bluetooth 5.0 opcional, G1RUS ofrece los datos centrales que Plaspy necesita para geocercas, gestión de rutas, alertas antirrobo y flujos de trabajo basados en telemetría. Su opción de batería reemplazable CR123, soporte Li‑Po recargable y capacidad de alimentación externa facilitan ajustar la estrategia de energía a cada activo e integrar monitoreo de combustible, detección de ignición o flujos de trabajo de inmovilizador en Plaspy cuando se empareja con sensores o interfaces de vehículo apropiados.

## Aspectos clave

- Rastreador GPS compatible con Plaspy, diseñado para un consumo de energía extremadamente bajo: modo de espera de varios años con baterías CR123 reemplazables y reporte diario.
- Alimentación flexible: use cuatro baterías CR123 reemplazables \(6.000 mAh en total\), un pack Li‑Po recargable opcional de 5.000 mAh o alimentación externa \(8–60 VDC en la variante LB\).
- Rendimiento de localización robusto gracias a un receptor GNSS u‑blox de 56 canales con SBAS, GLONASS y GPS asistido para posicionamientos rápidos.
- Múltiples modos de comunicación \(SMS, TCP, UDP\) y variantes que incluyen 3G hexa‑band y LTE Cat‑1 opcionales para adaptarse a la disponibilidad de red y a las necesidades de integración con Plaspy.
- Diseño mecánico robusto con opciones de montaje mediante tornillo, perno o carcasa magnética para instalaciones discretas o rápidas en remolques y contenedores.
- Telemetría a bordo: acelerómetro 3D, entradas/salidas digitales configurables y LEDs de estado para diagnósticos de GPS, celular y energía.
- Funciones avanzadas como FOTA, gestión de perfiles condicional, geocercas basadas en tiempo y velocidad, y hasta 128 puntos de entrega para la gestión de rutas y entregas.

## Cómo funciona con Plaspy

G1RUS transmite datos de posición y telemetría en formatos aceptados por Plaspy \(SMS, TCP, UDP\), permitiendo un rastreo en tiempo real y reportes históricos sin interrupciones. Plaspy interpreta fijaciones GNSS, eventos del acelerómetro y estados de E/S digitales para generar mapas en vivo, alertas e informes de gestión de flotas. Los reportes condicionados y los perfiles de bajo consumo minimizan el uso de la red celular sin sacrificar la vida útil de la batería.

- Actualizaciones de ubicación y telemetría en tiempo real \(posición GNSS, eventos de movimiento basados en acelerómetro\)
- Informes de bajo consumo condicionados: perfiles basados en tiempo, velocidad y eventos para optimizar la vida de la batería
- Geocercas y puntos de entrega: geocercas basadas en tiempo y velocidad y hasta 128 puntos de entrega para la gestión de rutas y entregas
- Estado y diagnóstico del dispositivo: estado de la batería \(reemplazable o recargable\), detección de fuente de alimentación \(variante LB\) y LEDs de estado para facilitar las comprobaciones en campo
- Sensores Bluetooth: módulo opcional Bluetooth 5.0 permite la integración de sensores BLE y beacons para monitorizar temperatura, apertura de puertas o proximidad
- FOTA y aprovisionamiento remoto: actualizaciones de firmware por aire y gestión de perfiles condicional para despliegues masivos

## Resumen técnico

| Conectividad | GSM/GPRS cuádruple banda \(850/900/1800/1900 MHz\); variantes opcionales 3G \(hexa-banda\) y LTE Cat‑1 |
| --- | --- |
| Bandas | GSM cuádruple banda 850/900/1800/1900 MHz; opcional 3G hexa‑band y LTE Cat‑1 \(según variante\) |
| Alimentación y batería | 4 × baterías CR123 reemplazables \(total 6000 mAh\) o pack Li‑Po recargable opcional \(5000 mAh\); entrada de energía externa 8–60 VDC en la variante LB; consumo de espera extremadamente bajo ~50 µA a 3,5 V |
| Tiempo de espera / Informes | Ejemplos aproximados de standby con CR123: 1 mensaje/día ≈ 1095 días; 4 mensajes/día ≈ 280 días; 1 hora de reporte ≈ 55 días; seguimiento activo ≈ 50 mA a 3,5 V |
| Interfaces | Entrada/salida digital configurable, acelerómetro 3D, LEDs de estado \(GPS/Celular/Energía\), conector de carga/serie de 6 pines, soporte para SIM interno \(SIM embebido opcional\), opcional serial‑to‑USB |
| GNSS | Receptor u‑blox de 56 canales con soporte SBAS y GLONASS; antena interna de parche y GPS asistido |
| Bluetooth | Módulo Bluetooth 5.0 opcional para sensores BLE y beacons |
| Gestión remota | FOTA \(actualización de firmware por aire\), gestión de perfiles condicional, modos de subida de datos SMS/TCP/UDP |
| Robustez y entorno | Resistencia al agua IPX7; rango de temperatura de operación −40 °C a +60 °C \(CR123\) o hasta +70 °C \(recargable\); choque y vibración conforme MIL‑STD 202G, 810F y SAE J1455 |
| Formato y especificaciones físicas | Aproximadamente 100 × 55 × 32 mm; peso ≈ 260,5 g \(con batería de litio\); opciones de montaje con tornillo/perno o carcasa magnética |
| Memoria | 64 Mbit de memoria flash \(~8.000 registros\) |

## Casos de uso

- Seguimiento de remolques y contenedores: operación prolongada sin supervisión y opciones de montaje robustas para activos intermodales.
- Gestión de entregas y rutas: use hasta 128 puntos de entrega y geocercas basadas en tiempo y velocidad para validar paradas y optimizar las rutas en Plaspy.
- Antirrobo y recuperación de activos: eventos del acelerómetro, alertas de movimiento y alertas de Plaspy permiten una respuesta rápida; empareje con flujos de trabajo de inmovilizador a través de sistemas externos del vehículo cuando sea necesario.
- Monitorización ambiental o de condiciones: sensores Bluetooth opcionales pueden reportar temperatura, estado de apertura de puertas o presencia de carga en Plaspy junto con telemetría GPS y del acelerómetro.
- Telemetría a largo plazo para flotas estacionales o equipos estacionados: opciones de vida de batería de varios años reducen el mantenimiento y mejoran el costo total de propiedad.

## Por qué elegir este rastreador con Plaspy

G1RUS está diseñado para la fiabilidad, flexibilidad y larga vida útil: cualidades que benefician directamente a implementaciones de Plaspy que requieren activos sin supervisión que permanezcan conectados y reportando durante meses o años. Su electrónica de bajo consumo y múltiples opciones de alimentación permiten elegir el equilibrio adecuado entre costo de mantenimiento y cadencia de reportes. Con un rendimiento de GNSS probado, clasificaciones ambientales robustas y funciones empresariales como FOTA y perfiles condicionales, G1RUS proporciona rastreo GPS preciso, telemetría y datos de estado que alimentan el rastreo en tiempo real, la gestión de flotas y los flujos de trabajo de antirrobo de Plaspy.

Aunque G1RUS no incluye sondas de combustible dedicadas ni hardware de inmovilizador listos para usar, su telemetría, E/S digital configurable y sensores Bluetooth opcionales facilitan la implementación de monitoreo de combustible, detección de ignición y inmovilización remota en Plaspy cuando se empareja con sensores externos apropiados o interfaces de vehículo. Para las organizaciones que requieren rastreadores GPS duraderos y de bajo mantenimiento que se integren a la perfección con Plaspy para rastreo en tiempo real, telemetría y protección de activos, G1RUS es una opción práctica y escalable.

