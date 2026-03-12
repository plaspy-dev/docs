---
slug: /astra_telematics/at503
id: at503
sidebar_label: AT503
sidebar_class_name: menu_item_tracker
---
# Astra Telematics - AT503

![AT503](./tracker.png)

El AT503, un mini localizador de activos de Astra Telematics, es un rastreador GPS diseñado específicamente para el monitoreo de activos no energizados con larga vida útil y mantenimiento mínimo. Encapsulado en resina epóxica y certificado IP68, el AT503 ofrece durabilidad robusta en un formato compacto y es completamente compatible con Plaspy para una integración fluida con la plataforma de rastreo y telemetría en tiempo real de Plaspy.

Diseñado para implementaciones a gran escala y entornos exteriores exigentes, el AT503 combina posicionamiento GNSS de múltiples constelaciones, conectividad LTE-M / NB‑IoT con retroceso a 2G y electrónica de ultra baja potencia para proporcionar hasta cinco años de vida de batería en perfiles típicos de reporte de baja frecuencia. La configuración en sitio y el diagnóstico son rápidos y simples gracias al aprovisionamiento Bluetooth Low Energy \(BLE\) mediante un teléfono inteligente.

## Puntos destacados

- Rastreador GPS compatible con Plaspy para un seguimiento y telemetría en tiempo real fiables en flotas de activos no energizados.
- Diseño de ultra bajo consumo con una gran batería interna LiFeS2 \(LTC\) de 7800 mAh; puede durar hasta 5 años en perfiles típicos de reporte de bajo consumo \(por ejemplo, reporte cada 24 horas\).
- GNSS de múltiples constelaciones \(GPS, Galileo, GLONASS y Beidou\) con antena GNSS interna de 15 mm para mejorar la fiabilidad de la posición.
- Conectividad celular a prueba de futuro: LTE‑M y NB‑IoT con retroceso GSM/GPRS \(2G\) y una eSIM integrada para el aprovisionamiento remoto.
- Construcción robusta y de mantenimiento nulo: encapsulado en epoxy, antenas internas, protección IP68 frente a entrada de polvo y agua, sin puertos externos ni LEDs.
- Acelerómetro MEMS integrado para detección de movimiento y disparadores de informes inteligentes que prolongan la vida de la batería.
- Montaje flexible: soporte magnético integrado y posibilidad de montaje con 2 tornillos M4 para una instalación segura.
- Bluetooth Low Energy para configuración y diagnóstico en sitio mediante una aplicación para smartphone, agilizando la puesta en marcha en campo.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el AT503 proporciona telemetría persistente de ubicación y movimiento que alimenta directamente los paneles y mapas de Plaspy, así como su motor de alertas. Los modos de reporte de bajo consumo y la lógica de activación por acelerómetro inteligente permiten equilibrar la frecuencia de actualizaciones y la vida de la batería según los requisitos de la flota. Dado que el AT503 utiliza LTE‑M / NB‑IoT con retroceso a GSM y eSIM, puede reportar ubicación y estado a Plaspy de forma fiable en áreas de cobertura amplias.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy a través de redes celulares \(LTE-M / NB‑IoT / retroceso GSM\).
- Detección de movimiento \(acelerómetro MEMS integrado\) activa informes inteligentes, eventos de geocerca y alertas antirobo.
- GNSS de múltiples constelaciones \(GPS, Galileo, GLONASS y Beidou\) proporcionan una ubicación consistente para los mapas y rutas de Plaspy.
- Bluetooth Low Energy para configuración y diagnósticos en sitio con una aplicación para smartphone, agilizando la puesta en marcha en campo.
- Informes de batería y estado de salud a Plaspy para que los gestores de flota programen reemplazos y eviten tiempos de inactividad.

## Descripción técnica

| Conectividad | LTE‑M y NB‑IoT con GSM/GPRS \(2G\) fallback; eSIM integrada para el aprovisionamiento de conectividad |
| --- | --- |
| Bandas / Modos de red | Soporta modos de red LTE‑M, NB‑IoT y 2G \(GSM/GPRS\); detalles específicos de bandas disponibles en la hoja de datos del fabricante |
| Alimentación y batería | Batería interna de LiFeS2 \(LTC\) no reemplazable, 7800 mAh; hasta 5 años en perfiles típicos de reporte de bajo consumo \(por ejemplo, reporte de 24 horas\) |
| Interfaces | Bluetooth Low Energy \(BLE\) para configuración y diagnósticos en sitio; no hay puertos externos; no hay indicadores LED; por defecto no dispone de bus CAN, entradas ADC, E/S digital ni sensores de manipulación |
| GNSS | GNSS de múltiples constelaciones: GPS, Galileo, GLONASS y Beidou con antena GNSS interna de 15 mm |
| Bluetooth | Bluetooth Low Energy \(BLE\) para aprovisionamiento con smartphone y diagnóstico de campo |
| Gestión remota | Aprovisionamiento de eSIM y opciones de informes/personalización de hardware proporcionadas por el fabricante; actualizaciones del sistema de por vida y garantía de 5 años de Astra Telematics |
| Factor de forma y durabilidad | Encapsulado en epoxy, protección IP68 frente a entrada de polvo y agua, antenas GSM y GNSS internas, soporte magnético integrado y puntos de montaje con 2 tornillos M4 |

## Casos de uso

- Rastreo de remolques y contenedores; la larga vida de la batería y la encapsulación robusta permiten uso prolongado en exteriores y mantenimiento poco frecuente.
- Monitoreo de equipos de construcción y alquiler; rastrea ubicación y movimiento para la utilización y recuperación de activos.
- Flotas de activos remotos y despliegues a gran escala; bajo costo total de propiedad con requisitos mínimos de mantenimiento en campo.
- Alertas de robo y flujos de recuperación; informes activados por movimiento proporcionan telemetría de ubicación oportuna a Plaspy.
- Seguimiento general de activos no supervisados donde no se requieren encendido, CAN bus o monitorización de combustible, pero sí telemetría y ubicación a largo plazo.

## Por qué elegir este rastreador con Plaspy

El AT503 es ideal cuando se necesita un rastreador GPS compatible con Plaspy que priorice la autonomía de la batería, la durabilidad y el mantenimiento mínimo. Su diseño encapsulado en epoxy, con IP68 y antenas internas, lo hace resistente en entornos exteriores adversos, mientras que la conectividad LTE‑M/NB‑IoT con aprovisionamiento de eSIM reduce la fricción de implementación a gran escala. El acelerómetro integrado habilita telemetría inteligente que maximiza la vida de la batería sin sacrificar actualizaciones de ubicación oportunas. Astra Telematics respalda el dispositivo con una garantía de 5 años y actualizaciones del sistema de por vida, y ofrece personalización de hardware/telemetría para soluciones de gestión de flotas a medida.

Nota: el AT503 se centra en el seguimiento de activos no energizados a largo plazo y sin mantenimiento. No incluye bus CAN, entradas ADC, E/S digital, sensores de manipulación integrados, entradas de encendido ni salidas de inmovilizador, por lo que no está destinado como reemplazo directo en escenarios donde se requiera monitorización de combustible, detección de encendido o inmovilización remota. En su lugar, el AT503 se empareja con Plaspy para proporcionar ubicación basada en GPS fiable, telemetría de movimiento y visibilidad a nivel de flota; para flotas que requieren monitorización de combustible o control de inmovilización, el AT503 puede usarse junto con dispositivos compatibles con Plaspy que\_proporcionen esas interfaces.

