---
slug: /astra_telematics/at500
id: at500
sidebar_label: AT500
sidebar_class_name: menu_item_tracker
---
# Astra Telematics - AT500

![AT500](./tracker.png)

El AT500 Mini Asset Tracker es un rastreador GPS compacto y recargable, diseñado específicamente para implementaciones compatibles con Plaspy que requieren un seguimiento discreto y de larga duración de activos pequeños y de difícil acceso. Con GNSS de múltiples constelaciones robusto, configuración BLE, carga inalámbrica Qi y conectividad celular de múltiples redes \(LTE‑M, NB‑IoT y respaldo 2G\), el AT500 ofrece seguimiento e telemetría en tiempo real confiables para flotas de activos de alta densidad y soluciones de equipos compartidos.

Diseñado para una instalación fácil y una telemetría escalable a través de Plaspy, el AT500 combina un formato compacto, protección IP68 y gestión de energía sensible al movimiento para prolongar la vida de la batería mientras mantiene la ubicación, el movimiento y el estado del dispositivo visibles en su consola de gestión de flotas. Su e‑SIM interna y sus antenas internas simplifican la provisión para flujos de gestión de flotas compatibles con Plaspy.

## Principales características

- Rastreador GPS compacto y discreto, ideal para la protección de activos pequeños y despliegues densos — opciones de montaje magnético o adhesivo.
- Larga autonomía con batería interna de 2200 mAh y carga inalámbrica Qi; el modo típico de informe de bajo consumo de 24 horas ofrece alrededor de 6 meses, con perfiles extendidos referenciados hasta 12 meses según la configuración.
- Conectividad celular preparada para el futuro: LTE‑M y NB‑IoT para conectividad de área amplia de bajo consumo, con respaldo 2G \(GPRS\) para cobertura heredada.
- GNSS de múltiples constelaciones \(GPS, Galileo, GLONASS, BeiDou\) y una antena GNSS interna de 15 mm para obtener ubicaciones fiables en entornos variados.
- BLE \(Bluetooth Low Energy\) para configuración en sitio, diagnósticos y puesta en servicio rápida con un teléfono inteligente.
- Informes con detección de movimiento mediante un acelerómetro MEMS para minimizar el consumo de energía, al tiempo que se emiten alertas de movimiento oportunas para anti‑robo y utilización de activos.
- Carcasa con clasificación IP68 y batería de respaldo interna para uso resistente en exteriores e industriales.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el AT500 ofrece ubicación y telemetría del dispositivo compatibles con Plaspy que se integran en paneles de seguimiento en tiempo real, reglas de alerta y motores de informes. El dispositivo reporta la posición GNSS, eventos de movimiento y el estado de la batería/salud a través de LTE‑M, NB‑IoT o 2G a los endpoints de Plaspy. Los diagnósticos por Bluetooth aceleran la provisión en campo, mientras que la e‑SIM interna y las antenas internas simplifican implementaciones a gran escala.

- Actualizaciones de ubicación y telemetría en tiempo real \(posición GNSS, batería y estado del dispositivo\)
- Lógica de movimiento y activación/reporte mediante acelerómetro MEMS para alertas de movimiento y notificaciones anti‑robo
- Bluetooth Low Energy para configuración local, diagnósticos y visibilidad del firmware a través de herramientas para smartphones
- Conectividad celular de área amplia y bajo consumo garantiza informes persistentes para la gestión de flotas y el seguimiento de activos de alta densidad
- La provisión e informes compatibles con Plaspy facilitan incluir activos compactos en programas más amplios de monitoreo de vehículos y activos

## Resumen técnico

| Conectividad | LTE‑M \(4G\), NB‑IoT, GSM \(2G GPRS de respaldo\) |
| --- | --- |
| Bandas | Soporte multi-red \(LTE‑M / NB‑IoT / 2G\) — las bandas de las operadoras regionales dependen de la variante del dispositivo y del mercado |
| Energía y batería | Batería interna de 2200 mAh; carga inalámbrica Qi; batería de respaldo interna; hasta ~6 meses en modo de informe de bajo consumo de 24 horas \(la documentación comercial hace referencia a hasta 12 meses según la configuración\) |
| Interfaces | No salida AUX 3.3V, no CANBus, no Driver ID, no entrada de manipulación, no RS232 \(AUX/CAN/DriverID/Tamper/RS232: No presentes\) |
| GNSS | Soporte para GPS, Galileo, GLONASS y BeiDou; antena GNSS interna \(15 mm\) |
| Bluetooth | Bluetooth Low Energy \(BLE\) para configuración y diagnósticos mediante smartphone |
| Gestión remota | Configuración para hardware y reportes personalizados; ficha técnica descargable y guía rápida disponibles del fabricante para su integración |
| Formato y protección | Rastreador compacto recargable; opciones de montaje magnético \(BM500\) o base adhesiva \(BA500\); resistencia IP68 al agua y al polvo; LEDs no visibles para una instalación discreta |

## Casos de uso

- Seguimiento de activos pequeños sin fuente de energía — herramientas, equipos y dispositivos compartidos donde el tamaño compacto y la larga duración de la batería son esenciales.
- Programas de compartición de equipos y flotas de alquiler que requieren una colocación densa de rastreadores GPS discretos para monitorizar la utilización y prevenir pérdidas.
- Protección de herramientas e instrumentos portátiles — alertas de movimiento e historial de ubicación para respaldar flujos de recuperación anti‑robo a través de Plaspy.
- Flotas de activos de alta densidad en almacenes o en sitios donde el aprovisionamiento BLE y las antenas internas simplifican el mantenimiento y la configuración.
- Implementaciones ambientales o remotas que requieren protección IP68 contra infiltración y carga inalámbrica para un mantenimiento de bajo contacto.

## Por qué elegir este rastreador con Plaspy

El AT500 Mini Asset Tracker es una opción práctica cuando se necesita un rastreador GPS compatible con Plaspy que priorice la compacidad, la longevidad de la batería y el mantenimiento de bajo contacto. Su radio celular multi‑red y la e‑SIM simplifican la gestión de la conectividad en despliegues, mientras que el soporte BLE y la documentación descargable aceleran la provisión en campo. Para la gestión de flotas y flujos de telemetría, el AT500 ofrece datos consistentes de ubicación y movimiento sin la complejidad de las entradas/salidas de nivel vehículo.

Nota sobre integraciones específicas de vehículos: el AT500 está optimizado para el rastreo de activos y equipos pequeños y no incluye entradas CANBus ni interfaces Driver ID, por lo que funciones como el monitoreo directo de combustible, la detección de encendido o el control del inmovilizador no están disponibles con esta unidad. Plaspy admite esas funciones cuando sea necesario usando otros rastreadores compatibles con interfaces de vehículo; el AT500 se integra en el mismo ecosistema de Plaspy para ofrecer visibilidad cohesiva entre flotas de dispositivos mixtos.

