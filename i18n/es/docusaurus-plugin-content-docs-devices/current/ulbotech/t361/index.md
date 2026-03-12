---
slug: /ulbotech/t361
id: t361
sidebar_label: T361
sidebar_class_name: menu_item_tracker
---
# Ulbotech - T361

![T361](./tracker.jpg)

# Ulbotech T361 OBD-II GPS Tracker

El Ulbotech T361 es un rastreador GPS compatible con Plaspy, diseñado para una implementación rápida y confiable mediante plug-and-play a través del puerto OBD-II de un vehículo. Pensado para la gestión de flotas, la seguridad y el monitoreo del comportamiento del conductor, el T361 expone datos del motor, diagnósticos CAN/J1939 y telemetría en tiempo real para añadir visibilidad a nivel de vehículo a tu plataforma Plaspy de forma rápida y sin necesidad de modificar el cableado.

Compacto y robusto, el T361 combina un módem GSM/GPRS cuatribanda con un módulo GNSS u-blox 6M, un inmovilizador interno \(salida de corte del motor\) y un acelerómetro de 3 ejes para soportar el rastreo en tiempo real, funciones anti-robo y un análisis detallado de eventos de conducción. Su integración con Plaspy permite alertas configurables, informes y actualizaciones de firmware remotas para telemática de vehículos y flotas escalables.

## Puntos clave

- Instalación OBD-II plug-and-play para un despliegue rápido en flotas y vehículos de alquiler.
- Conectividad GSM/GPRS cuatribanda \(850/900/1800/1900 MHz\) para amplia compatibilidad de red y seguimiento en tiempo real.
- Posicionamiento de alta sensibilidad con GNSS u-blox 6M y A-GPS para TTFF rápido y precisión de posición autónoma por debajo de 3 m.
- Acceso directo a datos del motor y diagnósticos \(protocolos OBD y SAE J1939 CANBUS\) para entregar telemetría rica y eventos originados en la ECU.
- Inmovilizador integrado/salida digital de corte del motor para anti-robo y flujos de inmovilización remota.
- Acelerómetro en el dispositivo para detección de comportamiento del conductor \(frenado brusco, aceleración rápida, giro brusco\) y alertas de colisión/movimiento.
- Actualizaciones de firmware remotas \(FOTA\) y detección automática de APN y zona horaria para simplificar despliegues a gran escala y el mantenimiento.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el T361 ofrece ubicación continua y telemetría del vehículo a tu plataforma para que puedas realizar seguimiento en tiempo real, alertas basadas en eventos y informes programados. Plaspy ingiere los flujos OBD y de sensores del dispositivo, normaliza los PIDs de diagnóstico y los combina con las soluciones GPS para habilitar la gestión de flotas, monitoreo de seguridad y respuesta anti-robo.

- Actualizaciones en tiempo real de ubicación y telemetría enviadas por GPRS para tableros de seguimiento en vivo y reproducción del historial.
- Datos de diagnóstico del vehículo \(PIDs OBD-II y SAE J1939\) disponibles para Plaspy para estado del motor, códigos de fallo y reglas basadas en telemetría.
- Estado de ignición y una única salida digital para control remoto de corte de motor/inmovilizador, para apoyar flujos anti-robo.
- Alertas configurables en Plaspy para cruces de geocerca, eventos de desconexión, batería baja y eventos de comportamiento del conductor \(aceleración rápida, frenado brusco, RPM altos, ralentí prolongado\).
- Actualizaciones de firmware remotas \(FOTA\) vía GPRS desde un servidor FTP para la gestión centralizada de dispositivos a través de las herramientas de aprovisionamiento de Plaspy.
- Los datos del motor/ECU expuestos por el T361 pueden ser utilizados por Plaspy para habilitar el monitoreo de combustible y el análisis de consumo cuando la ECU del vehículo proporciona los PIDs necesarios.

## Visión técnica

| Conectividad | GSM/GPRS cuatribanda \(850 / 900 / 1800 / 1900 MHz\), clase MS de GPRS con múltiples ranuras 12 \(MS Class B\) |
| --- | --- |
| Bandas / RF | GSM850/900/1800/1900; salida RF típica ~33 dBm \(GSM850/900\) y ~30 dBm \(DCS/PCS\) |
| Alimentación & Batería | Voltaje de operación 8–32 V DC; respaldo Li-Polymer interno de 3.7 V, 180 mAh; corriente activa típica ~70 mA, en modo reposo ~10 mA |
| Interfaces | OBD-II \(J1850 PWM/VPW, ISO 9141-2, ISO 14230 KWP2000, ISO15765-4 CAN\), SAE J1939; puerto micro USB para configuración; indicadores LED; una salida digital \(corte de motor\) |
| GNSS | u-blox 6M con A-GPS; precisión autónoma \< 3 m; TTFF en caliente \< 1 s, en frío ~25 s |
| Bluetooth | No reportado / no incluido en la especificación del dispositivo |
| Gestión remota | FOTA \(actualizaciones de firmware\) vía GPRS desde servidor FTP; identificación automática de APN y zona horaria |
| Memoria | Almacenamiento a bordo para aproximadamente 15,000 registros \(buffer local durante pérdidas de conectividad\) |
| Factor de forma y peso | Dos formatos reportados según el clearance del conector: aproximadamente 62×50×23 mm o 45×50×23 mm \(sin el conector J1962\); ~50 g |
| Ambiente | Rango de operación: -30°C a +80°C \(sin batería\); se reporta un rango de almacenamiento extendido |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real centralizado, telemetría del ECU e informes programados para optimizar rutas y utilización.
- Anti-robo e inmovilización: detección rápida de desenganche, corte remoto del motor y flujos de recuperación con alertas de Plaspy.
- Telemática de seguros y puntuación del conductor: capturar eventos bruscos, inactividad, RPM altos y patrones de conducción para puntuación y primas.
- Alquiler, asistencia en carretera y remarketing de vehículos: instalación OBD-II plug-and-play para alta rapidez de incorporación y trazabilidad de diagnósticos.

## Por qué elegir este tracker con Plaspy

El Ulbotech T361 combina la simplicidad de una instalación OBD-II plug-and-play con la profundidad telemétrica que requieren las flotas y los proveedores de servicios. Como rastreador GPS compatible con Plaspy, ofrece datos a nivel ECU, ubicación en tiempo real fiable y control de inmovilizador integrado para que puedas desplegar soluciones de anti-robo, gestión de flotas y telemática de seguros sin instalaciones complejas. Las actualizaciones de firmware remotas \(FOTA\), la configuración automática de APN y zona horaria, y la memoria a bordo reducen la carga de mantenimiento y el tiempo de inactividad, mientras que el GNSS de u-blox y la radio GSM/GPRS aseguran conectividad constante y seguimiento preciso. Si tu despliegue requiere hardware OBD-II compacto que proporcione telemetría rica a Plaspy para alertas, informes y gestión remota, el T361 es una opción práctica y probada.

