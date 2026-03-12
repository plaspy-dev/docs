---
slug: /coban/bn_201
id: bn_201
sidebar_label: BN-201
sidebar_class_name: menu_item_tracker
---
# Coban - BN-201

![BN-201](./tracker.png)

El rastreador BN-201 para mascotas es un dispositivo GPS compacto, compatible con Plaspy, diseñado para localizar de forma fiable a las mascotas, monitorización de voz remota y alertas de geocerca. Con un peso ligero de 52 g y pensado para uso diario, el BN-201 combina conectividad de doble red \(2G y NB-IoT\) con GPS de alta sensibilidad para ofrecer seguimiento en tiempo real preciso y de bajo consumo para perros, gatos y otros animales de compañía.

Diseñado para una fácil integración con Plaspy, el BN-201 reporta la posición y el estado utilizando los protocolos estándar TCP, UDP y SMS, de modo que gestores de flotas, servicios para mascotas y dueños individuales puedan usar el panel de control y la aplicación móvil de Plaspy para ubicación en tiempo real, historial y alertas configurables. Las funciones de emisión de voz y monitorización remota del dispositivo añaden una capa adicional de seguridad en escenarios operativos, de emergencia o de comportamiento.

## Puntos clave

- Rastreador GPS compatible con Plaspy: se integra vía TCP/UDP/SMS para seguimiento en tiempo real e informes de eventos.
- Operación de doble red de bajo consumo: soporta 2G \(GSM/GPRS\) y NB-IoT para standby extendido y transmisiones de datos reducidos.
- Posicionamiento preciso: receptor GNSS de alta sensibilidad \(~5 m de precisión típica\) con tiempos de adquisición rápidos.
- Diseño compacto y apto para mascotas: terminal ligero de 52 g diseñado para comodidad y uso diario.
- Difusión de voz y escucha remota: enviar mensajes de voz al dispositivo o escuchar el entorno para emergencias.
- Soporte de geocerca \(límite geográfico electrónico\): límites de ubicación configurables con alertas de salida vía Plaspy.
- Integración y configuración simples: comandos de configuración por SMS y guías/manuales descargables para una rápida implementación.

## Cómo funciona con Plaspy

Integrar el BN-201 con Plaspy es sencillo porque el dispositivo utiliza canales de comunicación estándar que Plaspy admite. El rastreador envía paquetes periódicos o basados en eventos a través de TCP/UDP o SMS; Plaspy procesa esos mensajes, decodifica las coordenadas GNSS y el estado del dispositivo, y los presenta en tiempo real en mapas, informes y alertas. NB-IoT ofrece una opción de bajo consumo para telemetría frecuente sin un agotamiento elevado de la batería.

- Actualizaciones de ubicación y telemetría en tiempo real: las posiciones GNSS se transmiten a Plaspy para seguimiento en mapa en vivo y reproducción del historial.
- Alertas de geocerca: cuando una mascota cruza una geocerca predefinida, Plaspy puede activar notificaciones para los dueños.
- Monitorización de voz y difusión de voz remota: Plaspy puede conectarse a las funciones del dispositivo \(mediante comandos compatibles\) para escucha de emergencias o enviar indicaciones de voz.
- Canales de informe flexibles: TCP/UDP para informes IP continuos y SMS para mensajes de respaldo o configuración.
- Opción NB-IoT de bajo consumo: telemetría de subida eficiente para conservar la batería sin perder las actualizaciones compatibles con Plaspy.

## Resumen técnico

| Conectividad | 2G GSM/GPRS y NB-IoT |
| --- | --- |
| Bandas | 2G: 1900/1800/900/850 MHz; NB-IoT: B1, B3, B5, B8, B20 |
| Alimentación y Batería | Batería Li‑ion recargable de 3,7 V y 450 mAh; modo de espera de hasta ~375 horas; entrada de carga DC 5V 300 mA |
| Interfaces | Cable de carga/datos incluido; configuración por SMS y guía de configuración disponibles \(no se reporta I/O dedicado ni inmovilizador\) |
| GNSS | Posicionamiento GPS; precisión típica ~5 m; sensibilidad del receptor -156 dBm; adquisición: frío ~45 s, tibio ~35 s, caliente ~1 s |
| Bluetooth | No se especifican sensores/beacons Bluetooth en la descripción del fabricante |
| Gestión remota | Configuración vía SMS y guía de la aplicación móvil; manuales de usuario y vídeos de instalación disponibles para la integración |
| Formato | Terminal compacto para mascotas, ligero \(52 g\), diseñado para fijarse al collar y uso diario |
| Ambiental | Operación: -20°C a +45°C; Almacenamiento: -40°C a +85°C; Humedad: 5%–95% sin condensación |

## Casos de uso

- Seguimiento de ubicación de mascotas: actualizaciones de posición en tiempo real para perros, gatos y otros pequeños animales de compañía.
- Monitoreo de geocerca: alerta a los dueños cuando una mascota sale de una área segura predefinida usando notificaciones de Plaspy.
- Entrenamiento remoto y gestión del comportamiento: enviar indicaciones de voz o comandos de voz a través de la interfaz compatible con Plaspy.
- Monitorización de voz de emergencia: escuchar el entorno o emitir mensajes al dispositivo en situaciones urgentes.
- Seguimiento ligero de activos: rastrear objetos pequeños o equipos donde un diseño compacto y una larga autonomía resulten ventajosos.

## Por qué elegir este rastreador con Plaspy

BN-201 es un rastreador GPS práctico compatible con Plaspy cuando la prioridad es la seguridad de las mascotas, una larga autonomía y una integración de plataforma sencilla. Su combinación de NB-IoT y 2G garantiza una cobertura de red flexible y telemetría de bajo consumo, mientras que los informes por TCP/UDP/SMS facilitan la conexión a Plaspy para seguimiento en tiempo real, alertas de geocerca y reproducción histórica. Las funciones de difusión de voz y escucha remota añaden una capa de seguridad práctica para dueños que requieren conciencia situacional durante salidas o emergencias.

Los usuarios de Plaspy que necesiten funciones especializadas de gestión de flotas, como monitoreo de ignición, control de inmovilizador, monitoreo detallado de combustible o ecosistemas de sensores Bluetooth, deben tener en cuenta que el BN-201 está optimizado para uso con mascotas. Plaspy, sin embargo, admite esas funciones avanzadas de telemetría en otros dispositivos compatibles cuando se requiera. Para despliegues centrados en mascotas, el BN-201 ofrece un conjunto equilibrado de capacidades: GPS de precisión, larga vida de la batería, configuración simple por SMS y soporte de la aplicación móvil, lo que lo convierte en una opción eficaz para el seguimiento en tiempo real y la tranquilidad.

