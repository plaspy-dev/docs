---
slug: /cantrack/g05n
id: g05n
sidebar_label: G05N
sidebar_class_name: menu_item_tracker
---
# CanTrack - G05N

![G05N](./tracker.png)

# G05N Vehicle Tracker

El G05N Vehicle Tracker es un rastreador GPS cableado diseñado para instalación permanente en vehículos e integración compatible con Plaspy. Utilizando redes GSM/GPRS y satélites GPS, el G05N ofrece seguimiento y telemetría en tiempo real fiables para plataformas habilitadas por Plaspy a través de SMS o GPRS \(TCP/IP\). Está diseñado para gestión de flotas, telemática de seguros y aplicaciones anti-robo donde se requiere control remoto, alimentación continua y alertas robustas.

El G05N combina un reporte de posición preciso con monitoreo del estado del vehículo—detección de encendido \(ACC\), alertas de exceso de velocidad y geocercas, alarma de vibración y cambio de ángulo, más un botón SOS dedicado. La compatibilidad con Plaspy significa que los gestores de flotas y los proveedores de servicios pueden ingerir actualizaciones de posición, alarmas y comandos remotos en una única plataforma para monitorización centralizada, generación de informes y respuesta rápida.

## Puntos Clave

- Rastreador GPS compatible con Plaspy que proporciona seguimiento en tiempo real vía GPRS \(TCP/IP\) y SMS para una integración rápida.
- Capacidad de inmovilizador remoto \(corte de suministro de combustible y/o circuito\) para una respuesta antifurto efectiva y recuperación del vehículo.
- Persistencia de datos a bordo: almacena hasta 1,400 puntos GPS cuando se pierde la señal GSM y se cargan automáticamente al restablecerse la conexión.
- Alertas integrales: geocercas, sobrevelocidad, vibración, cambio de ángulo, corte de energía y alertas de emergencia SOS.
- Instalación permanente cableada con un rango de entrada amplio \(9–36V DC\) y modo de reposo de bajo consumo, además de una señal de latido para conservar la batería.
- Rendimiento GNSS preciso con el chipset MT6261 + RDA6625e, precisión típica por debajo de 10 m y TTFF rápidos.
- Formato compacto y ligero \(90 × 49,3 × 16,7 mm; 50 g\) apto para automóviles, motocicletas y pequeños vehículos comerciales.

## Cómo Funciona con Plaspy

Cuando está instalado y alimentado, el G05N monitoriza de forma continua la posición GNSS y la telemetría del vehículo, enviando datos de ubicación y eventos a Plaspy mediante GPRS \(TCP/IP\) o SMS. La integración compatible con Plaspy permite visualizar ubicaciones en tiempo real, definir geocercas, activar notificaciones y ejecutar comandos remotos como la inmovilización. El registro local del dispositivo garantiza que no se pierdan datos durante interrupciones de la red, con la carga automática de los puntos almacenados una vez que se restablece la conectividad.

- Actualizaciones en tiempo real de ubicación y telemetría \(a través de GPRS TCP/IP o SMS\) hacia Plaspy para mapeo e informes.
- Monitoreo del estado de encendido \(ACC\) y reporte de eventos para el análisis del comportamiento del conductor y la reconstrucción de la ruta.
- Alarmas y avisos: geocercas, sobrevelocidad, vibración, cambio de ángulo, corte de energía y reportes de emergencia SOS.
- Puntos GPS almacenados \(hasta 1,400\) se cargan automáticamente tras la reconexión de GSM para preservar el historial de rutas.
- Comandos de inmovilizador remoto compatibles para acciones antirrobo a través de la plataforma Plaspy o por SMS.
- Nota: el G05N ofrece telemetría y control remoto completos, pero no incluye monitorización dedicada de combustible ni sensores Bluetooth.

## Resumen Técnico

| Conectividad | GSM/GPRS \(TCP/IP\), SMS |
| --- | --- |
| Bandas | Cuatro bandas GSM 850 / 900 / 1800 / 1900 MHz \(GPRS Clase 12\) |
| Memoria | 32 + 32 Mb \(almacenamiento a bordo para puntos GPS; búfer de hasta 1,400 puntos\) |
| Alimentación y batería | Voltaje de funcionamiento 9–36V DC; batería de respaldo de litio manganeso integrada de 200 mAh \(3,7 V\) \(modo de espera ~1 hora\); corriente de operación 5–50 mA |
| Interfaces y E/S | Detección de ignición \(ACC\), entrada de botón SOS, sensor de vibración/cambio de ángulo, detección de corte de energía, control de inmovilizador remoto \(corte de suministro de aceite y/o circuito\) |
| GNSS | GPS L1 \(1575,42 MHz C/A\) con chipset MT6261 + RDA6625e, 66 canales, precisión típica por debajo de 10 m |
| Sensibilidad y TTFF | Sensibilidad de seguimiento -165 dBm; adquisición -148 dBm; TTFF en caliente ≤1 s, en frío ≤32 s |
| Potencia de salida GSM | ~33 ±3 dBm \(850/900 MHz\); ~30 ±3 dBm \(1800/1900 MHz\) |
| Antenas e indicadores | Antenas GSM integradas y GPS cerámicas; indicadores LED para alimentación/GSM/GPS |
| Bluetooth | No soportado \(no hay sensores Bluetooth integrados\) |
| Gestión remota | Comandos por SMS y control a través de plataforma online/App para alertas, ajustes y inmovilización remota |
| Condiciones de operación | Temperatura de operación -20 °C a +70 °C; peso 50 g; dimensiones 90 × 49,3 × 16,7 mm |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, historial de rutas y alertas de sobrevelocidad para flotas de vehículos pequeños y medianos.
- Protección antifurto: inmovilizador remoto y alertas de corte de energía reducen el riesgo de robo y mejoran la recuperación del vehículo.
- Telemática de seguros: datos ACC y telemetría respaldan el análisis del comportamiento de conducción y el procesamiento de reclamaciones.
- Talleres de servicio y flotas de alquiler: telemetría continua, geocercas y alertas SOS mejoran el control de activos.
- Rastreo de motocicletas y bicicletas eléctricas: instalación cableada compacta con alarmas de vibración y cambio de ángulo.

## Por qué elegir este rastreador con Plaspy

G05N es un rastreador GPS práctico y compatible con Plaspy para organizaciones que requieren seguimiento en tiempo real fiable, telemetría robusta y características accionables anti-robo. Su conectividad GPRS cuád-banda y las alternativas por SMS lo hacen adecuado para implementaciones en áreas amplias, mientras que el búfer de 1,400 puntos y la carga automática garantizan la continuidad de la ruta incluso ante interrupciones de señal. La inmovilización remota y las alertas inmediatas de corte de energía proporcionan a los gestores de flotas y a los propietarios de los vehículos control directo para evitar robos y limitar pérdidas.

La integración del G05N con Plaspy proporciona una plataforma centralizada para la monitorización de vehículos, alertas y comandos remotos. Su diseño con cableado fijo, modos de bajo consumo y reporte de latido admite una gestión de flotas siempre activa sin necesidad de mantenimiento frecuente. Si necesita un rastreador GPS compacto y confiable que soporte detección de ignition \(ACC\), control del inmovilizador y alertas completas, e integrarse de forma fluida en Plaspy para informes y operaciones, el G05N está diseñado para proporcionar telemetría y seguridad consistentes para vehículos en entornos comerciales y de consumo.

