---
slug: /cantrack/g183
id: g183
sidebar_label: G183
sidebar_class_name: menu_item_tracker
---
# CanTrack - G183

![G183](./tracker.jpg)

El rastreador GPS JOBD de la serie G183 es un dispositivo compacto, compatible con Plaspy, diseñado para diagnósticos de vehículos y telemática en tiempo real. Pensado para automóviles de pasajeros y vehículos comerciales, el G183 ofrece una posición GNSS precisa, compatibilidad completa con protocolos de diagnóstico y reportes continuos por TCP/SMS, permitiendo a operadores de flotas y proveedores de servicios integrar ubicación, DTCs y estado del vehículo en Plaspy con un mínimo esfuerzo de ingeniería.

El G183 combina una conectividad robusta in-vehículo con telemetría detallada: kilometraje, consumo de combustible, tiempo de viaje, códigos de diagnóstico y una amplia cobertura de alarmas \(exceso de velocidad, conducción agresiva, colisión, remolque, baja tensión, encendido/apagado, conexión/desconexión del dongle, SOS y altas temperaturas\). Su tamaño compacto y la interfaz OBD A/B lo hacen ideal para la gestión de flotas escalable, monitoreo antirrobo y seguimiento de la salud del vehículo cuando se usa con Plaspy.

## Aspectos clave

- Rastreador GPS a nivel OBD compatible con Plaspy, diseñado para gestión de flotas y diagnósticos de vehículos.
- GNSS de múltiples constelaciones \(GPS/GLONASS/QZSS/COMPASS/Galileo\) con receptor de 56 canales y precisión GPS ~2,5 m CEP.
- Admite OBDII, JOBD, J1939, J1708 y protocolos específicos de fabricantes \(Toyota, Nissan, Mazda, Honda, Mitsubishi, Subaru, Suzuki, Daihatsu, Hino, Isuzu\) para una amplia cobertura de vehículos.
- Seguimiento y telemetría en tiempo real vía TCP y SMS: kilometraje, monitoreo de combustible, tiempo de viaje y carga de DTCs a Plaspy.
- Conjunto de alarmas integral que incluye exceso de velocidad, aceleración/desaceleración bruscas, giros bruscos, detección de colisiones, remolque y alertas SOS.
- Diseño compacto y robusto \(62 x 50 x 25 mm, ~100 g\) con bajo consumo en modo de reposo para una implementación fiable en flotas.
- Acelerómetro integrado \(±16 g, 3 ejes\) y 8 MB de memoria flash para el buffering de eventos y almacenamiento fuera de línea.

## Cómo funciona con Plaspy

El G183 envía datos de ubicación, diagnóstico y eventos a través de TCP o SMS, para que Plaspy pueda ingerir flujos de seguimiento y telemetría en tiempo real. Una vez integrado, los paneles de control y las API de Plaspy pueden mostrar la posición en tiempo real del vehículo, eventos de alarma y DTCs relevantes para mantenimiento, para una supervisión proactiva de la flota.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas mediante TCP/SMS para la ingesta y visualización en Plaspy.
- Carga de DTC \(códigos de diagnóstico\) y parámetros del vehículo compatibles con los protocolos OBDII/JOBD/J1939/J1708 y protocolos dedicados de fabricante.
- Monitoreo de combustible e informes de kilometraje en tiempo real para análisis de consumo dentro de los informes de Plaspy.
- Detección de encendido/apagado y una amplia gama de alarmas \(SOS, colisión, remolque, conexión/desconexión\) para activar alertas y flujos de trabajo en Plaspy.
- Reconstrucción de eventos utilizando el acelerómetro de ±16 g y el buffering de flash local para garantizar un historial telemático preciso durante pérdidas temporales de conectividad.

## Resumen técnico

| Modelo | Rastreador GPS JOBD de la serie G183 |
| --- | --- |
| Conectividad | TCP/SMS sobre red celular \(múltiples opciones de módulo celular\) |
| Módulos celulares / Opciones de red | SIM800C \(GSM/GPRS cuádri-banda\), LISA-U200 \(HSPA + GPRS/EDGE\), SIM5360E, SIM5320A/J variantes \(aprobaciones regionales\) |
| Bandas | GSM cuádri-banda para SIM800C; las bandas adicionales dependen de la variante de módulo HSPA/3G elegida |
| Alimentación & Batería | Operación 8–32 V DC; batería de respaldo recargable integrada de 3.7 V/100 mAh; corriente en reposo \<10 mA a 12/24 V |
| Interfaces | Interfaz OBD del vehículo \(tipo A/B\), puerto de configuración micro-USB, interfaz de botón SOS MMCX |
| GNSS | GPS, GLONASS, QZSS, COMPASS, Galileo; receptor de 56 canales; precisión GPS ~2,5 m CEP; arranque en frío ~30 s; arranque en caliente ~1 s; A-GPS opcional |
| Acelerómetro & Sensores | Acelerómetro de 3 ejes ±16 g para detección de colisiones y eventos de conducción |
| Almacenamiento | 8 MB de memoria flash para buffering y almacenamiento de eventos fuera de línea |
| Antenas | Antenas integradas 2G/3G y GNSS |
| Gestión remota | Depuración remota, consulta de posición por SMS; configuración TCP y carga de datos |
| Dimensiones & Peso | 62 x 50 x 25 mm; ~100 g |
| Accesorios \(opcionales\) | Cable USB privado, cable de extensión SOS |

## Casos de uso

- Gestión de flotas: combina rastreo en tiempo real, kilometraje y monitoreo de combustible para optimizar rutas y reducir costos operativos con las analíticas de Plaspy.
- Diagnóstico de vehículos y mantenimiento preventivo: carga de DTCs y telemetría a Plaspy para priorizar reparaciones y reducir el tiempo de inactividad.
- Antirrobo y monitoreo de seguridad: alertas SOS, conexión/desconexión del dongle y alarmas de remolque integradas en Plaspy para una respuesta rápida.
- Comportamiento del conductor y gestión de riesgos: aceleración/frenado bruscos, giros repentinos y detección de colisiones alimentan las tarjetas de puntuación del conductor y programas de coaching.
- Telemetría de vehículos comerciales: soporte para J1939/J1708 y múltiples protocolos de fabricante para camiones de carga pesada y flotas mixtas.

## Por qué elegir este rastreador con Plaspy

Elegir el G183 para la integración con Plaspy ofrece un equilibrio práctico entre la profundidad de diagnósticos y la capacidad de seguimiento en tiempo real. Su amplio soporte de protocolos garantiza compatibilidad entre vehículos de pasajeros y comerciales, mientras la posición GNSS multiconstelación y la recepción de 56 canales proporcionan un seguimiento en tiempo real confiable y telemetría precisa. Los datos del acelerómetro integrado y el buffering de eventos mejoran la reconstrucción de incidentes y reducen la pérdida de datos durante caídas temporales de la red.

Para operadores de flota e integradores, el G183 reduce los obstáculos de despliegue: conectividad OBD A/B, formato compacto y múltiples opciones de módulo celular se adaptan a los requisitos de red regionales. Los informes TCP/SMS compatibles con Plaspy y las capacidades de depuración remota aceleran la integración del sistema, habilitando telemetría, monitoreo de combustible y flujos de trabajo orientados al encendido para que estén operativos rápidamente. Cuando un inmovilizador o sensores Bluetooth forman parte de una solución mayor, el G183 puede aportar datos de encendido y diagnóstico a Plaspy, mientras que módulos o gateways externos gestionan esas funciones periféricas.

