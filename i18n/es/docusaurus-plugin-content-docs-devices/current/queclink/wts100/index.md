---
slug: /queclink/wts100
id: wts100
sidebar_label: WTS100
sidebar_class_name: menu_item_tracker
---
# QuecLink - WTS100

![WTS100](./tracker.png)

El WTS100 de Queclink es un sensor de temperatura inalámbrico compacto alimentado por batería, diseñado para la logística de la cadena de frío, el monitoreo de activos y otros despliegues sensibles a la temperatura. Compatible con Plaspy cuando se integra a través de receptores o gateways compatibles de Queclink, el WTS100 aporta telemetría de temperatura continua a su entorno Plaspy, de modo que los equipos pueden supervisar las condiciones en camiones refrigerados, contenedores, almacenes y activos en campo junto con sus datos de flota y de activos existentes.

El WTS100 está diseñado para durabilidad en campo y operación prolongada sin necesidad de atención: funciona con dos pilas AA, ofrece un consumo de energía muy bajo y una autonomía en espera de hasta tres años con intervalos de reporte típicos, y transmite datos de temperatura a través de 433.92 MHz FSK hacia receptores compatibles. Aunque el WTS100 no es un rastreador GPS, complementa las implementaciones de rastreadores GPS y gestión de flotas al suministrar telemetría de temperatura confiable a Plaspy para monitoreo unificado, alertas e informes históricos.

## Aspectos destacados

- Compatible con Plaspy a través de receptores/gateways de Queclink — integra la telemetría de temperatura en su panel de Plaspy y en sus flujos de alertas.
- Larga vida de la batería — dos pilas AA y hasta tres años en espera cuando reporta una vez por minuto reducen los costos de mantenimiento y reemplazo.
- Diseñado específicamente para la monitorización de temperatura en la cadena de frío y de activos — opera desde -20°C hasta +60°C para cubrir la mayor parte de las necesidades de transporte y almacenamiento refrigerado.
- Diseño compacto y ligero \(70 × 61 × 23 mm; ~117 g\) para montaje discreto en palets, contenedores o equipos.
- Enlace RF fiable — 433.92 MHz FSK con sensibilidad del receptor de -105 dBm @ 1 kb/s para telemetría robusta en implementaciones típicas.
- Emparejamiento en campo y retroalimentación de estado simples — el botón de emparejamiento lateral y el LED facilitan la instalación y la resolución de problemas.
- Aviso de fin de vida útil y guía de migración — Queclink ha anunciado el fin de vida útil para accesorios RF433, incluido el WTS100; se recomienda WTH301 como reemplazo y se sugieren alternativas BLE para despliegues futuros.

## Cómo funciona con Plaspy

El WTS100 transmite informes de temperatura periódicos o desencadenados por condiciones a 433.92 MHz hacia receptores o gateways compatibles de Queclink. Esos receptores envían la telemetría del sensor a sistemas de backend. Cuando configure ese gateway para reenviar los datos del sensor a Plaspy, las mediciones de temperatura, el estado del dispositivo y los eventos de alerta estarán disponibles en Plaspy para monitorización en tiempo real, análisis histórico y alertas.

- Actualizaciones de telemetría en tiempo real: las lecturas de temperatura se entregan a Plaspy a medida que las recibe el gateway, lo que permite monitorización de condiciones casi en tiempo real.
- Estado de la batería y salud del dispositivo: Plaspy puede mostrar el estado de la batería y la calidad de la conexión RF reportada por el gateway para planificar el mantenimiento antes de que ocurran fallos.
- Alertas y umbrales: infracciones de umbral de temperatura reportadas por el WTS100 a través del gateway disparan alertas de Plaspy para una acción inmediata ante excepciones de la cadena de frío.
- Identificación y emparejamiento del dispositivo: el botón lateral y el LED del WTS100 facilitan el emparejamiento y la asignación de un sensor a un registro de dispositivo en Plaspy a través del gateway.
- Soporte para planificación de migración: dado que el WTS100 está en fin de vida \(EOL\), los usuarios de Plaspy deben planificar migraciones a reemplazos recomendados \(p. ej., WTH301\) o sensores basados en BLE, en coordinación con las guías de integración de Queclink y Plaspy.

## Visión general técnica

| Conectividad | 433.92 MHz FSK \(telemetría de temperatura inalámbrica hacia receptores/gateways compatibles de Queclink\) |
| --- | --- |
| Bandas / Frecuencia | 433.92 MHz |
| Sensibilidad del receptor | -105 dBm @ 1 kb/s \(FSK\) |
| Alimentación y batería | 2 × pilas AA; hasta tres años en espera cuando reporta una vez por minuto \(condiciones ambientales típicas\) |
| Interfaces | Botón de emparejamiento/configuración lateral; indicador LED para emparejamiento y estado de transmisión |
| Temperatura de operación | -20°C a +60°C |
| GNSS | Ninguno \(el dispositivo es un sensor de temperatura, no un rastreador GPS\) |
| Bluetooth | No incluido — Queclink recomienda alternativas de accesorios BLE para despliegues futuros |
| Gestión remota | La integración y el reenvío se gestionan a través de receptores/gateways Queclink compatibles; no se especifica FOTA \(actualización de firmware por aire\) ni configuración remota directa para el WTS100 |
| Factor de forma | Sensor de campo compacto y robusto — 70 × 61 × 23 mm; ~117 g; adecuado para camiones refrigerados, contenedores y activos de almacén |
| Garantía y soporte | Aviso de Fin de Vida \(EOL\) de Queclink; garantía de un año y garantía de un año para accesorios RF433; soporte técnico de por vida según el aviso del fabricante |

## Casos de uso

- Monitoreo de la cadena de frío para camiones y contenedores refrigerados — telemetría de temperatura continua para detectar desviaciones y activar alertas en Plaspy.
- Seguimiento de la temperatura de activos y palets en almacenes — monitorizar mercancías o zonas específicas sin añadir hardware de alimentación pesado ni GPS.
- Sensado ambiental de activos en campo — operación con batería de bajo consumo para ubicaciones remotas o de acceso intermitente donde no hay suministro eléctrico continuo.
- Vigilancia de equipos y mercancías — integre los datos de temperatura con sistemas de gestión de flotas en Plaspy para correlacionar las condiciones ambientales con los envíos o el uso del equipo.

## Por qué elegir este rastreador con Plaspy

Elegir el WTS100 para la integración con Plaspy ofrece telemetría de temperatura enfocada y de bajo consumo que complementa los datos de rastreo GPS en los flujos de trabajo de gestión de flotas y logística. Su larga duración de batería y su formato compacto reducen el mantenimiento y facilitan el despliegue en camiones, contenedores y almacenes, mientras que el enlace RF y la sencilla incorporación a través de receptores y gateways existentes de Queclink aceleran la integración. En Plaspy, los equipos obtienen una visibilidad centralizada de la telemetría de temperatura junto con la ubicación y los datos del vehículo para una respuesta ante incidentes más rápida y una trazabilidad más clara para el cumplimiento de la cadena de frío.

Nota sobre el ciclo de vida: Queclink ha anunciado el fin de vida útil para accesorios RF433, incluido el WTS100, con fecha de fin de soporte el 2025-08-15. Los clientes deben planificar la migración a reemplazos recomendados \(p. ej., WTH301\) o a sensores basados en BLE y ponerse en contacto con el soporte de Queclink para obtener orientación sobre la migración e integración con Plaspy. Aunque el WTS100 no es un rastreador GPS y no ofrece funciones de monitorización de combustible, ignición o inmovilizador, se integra de forma limpia en soluciones de monitoreo de flotas y activos más amplias al suministrar telemetría de temperatura a su plataforma Plaspy.

