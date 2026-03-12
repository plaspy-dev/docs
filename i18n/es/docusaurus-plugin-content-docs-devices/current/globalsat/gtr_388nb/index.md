---
slug: /globalsat/gtr_388nb
id: gtr_388nb
sidebar_label: GTR-388NB
sidebar_class_name: menu_item_tracker
---
# GlobalSat - GTR-388NB

![GTR-388NB](./tracker.jpg)

El GTR-388NB es un rastreador GPS compacto y robusto para NB‑IoT, diseñado específicamente para eBikes, motos, scooters y vehículos ligeros. Como dispositivo compatible con Plaspy, ofrece rastreo en tiempo real impermeable y de bajo consumo y telemetría fiable en condiciones exteriores adversas. Su pequeño factor de forma y su cableado sencillo facilitan la instalación, mientras que las antenas GNSS y GSM integradas, junto con el soporte AGPS, aseguran fijaciones de posición consistentes para la gestión de flotas y flujos de anti‑robo.

Diseñado para telemática de vehículos, el GTR‑388NB admite comunicación NB‑IoT en las bandas B3, B8, B20 y B28 y transmite datos por UDP. Con un sensor de movimiento \(G\) interno, indicadores LED de estado, una batería de respaldo recargable de 820 mAh y una gestión de energía optimizada, este rastreador GPS compatible con Plaspy equilibra una larga vida en espera con actualizaciones en tiempo real fiables. Accesorios opcionales \(relé, cable OBDII, botón de emergencia, cable de firmware/depuración\) simplifican la integración en soluciones compartidas de micromovilidad y anti‑robo para motocicletas.

## Puntos Clave

- Rastreador GPS NB‑IoT compatible con Plaspy para un seguimiento fiable en tiempo real y la gestión de flotas de vehículos ligeros y scooters.
- Caja robusta, impermeable IPX7 para uso en exteriores en motocicletas y eBikes.
- Diseño de bajo consumo con batería de respaldo de 820 mAh y modo de espera optimizado para largas horas de funcionamiento y reportes de telemetría.
- Antena GNSS de parche cerámico integrada de alta sensibilidad y soporte AGPS para fijaciones más rápidas y datos de posición precisos.
- Multitud de E/S para detección de ignición \(ACC\), entrada de botón de emergencia, telemetría analógica \(0–28 V\) y control de relé para inmovilizador o accesorios.
- Conectividad NB‑IoT en B3, B8, B20 y B28 con transporte de datos UDP; adecuada para despliegues de bajo ancho de banda y amplia cobertura.
- Factor de forma compacto y ligero \(107.5 x 38.7 x 22.8 mm, 66.5 g\) para una instalación discreta en flotas de micromovilidad compartida.

## Cómo Funciona con Plaspy

Cuando se integra con Plaspy, el GTR‑388NB transmite la posición y la telemetría del vehículo a su cuenta de Plaspy mediante NB‑IoT. Plaspy recibe los paquetes UDP del rastreador y los convierte en marcadores en el mapa en tiempo real, eventos de geocerca, rutas históricas y notificaciones de alerta. El panel de control y las APIs de Plaspy facilitan combinar la telemetría del GTR‑388NB con otras fuentes de datos para una gestión de flotas unificada y flujos de anti‑robo.

- Actualizaciones de ubicación y telemetría en tiempo real: coordenadas GNSS, marca de tiempo y estado de movimiento se envían a Plaspy para rastreo en vivo y reproducción de historial.
- Estado de ignición y detección ACC: la entrada ACC dedicada informa a Plaspy sobre eventos de encendido/apagado para el registro de viajes y el monitoreo del estado del motor.
- Telemetría analógica \(0–28 V\): admite sensores basados en voltaje—útil para monitoreo de combustible o reporte de voltaje de la batería al configurarlo con Plaspy.
- Inmovilizador remoto / control de relé: la salida digital de disparo negativo puede usarse como control de inmovilizador mediante comandos de Plaspy cuando se combina con un accesorio de relé adecuado.
- Alertas de emergencia y manipulación: una entrada de emergencia dedicada y un sensor de movimiento interno permiten alertas de robo y movimiento dirigidas a las notificaciones de Plaspy.
- Consolidación de datos: Plaspy puede combinar la telemetría del GTR‑388NB con otros datos de sensores \(incluidos sensores Bluetooth gestionados por separado\) para una monitorización e informes más completos.

## Resumen Técnico

| Modelo | GTR‑388NB |
| --- | --- |
| Conectividad | NB‑IoT \(UDP\) |
| Bandas | B3, B8, B20, B28 |
| Alimentación y Batería | Entrada +12 V a +30 V; batería de respaldo recargable interna de 820 mAh; gestión de energía optimizada |
| Interfaces | Una entrada digital \(personalizada\), una entrada digital de emergencia, una entrada analógica \(0–28 V\), una salida digital \(disparo negativo, hasta 300 mA\), ACC/ignición \(entrada digital\) |
| GNSS | Antena GNSS integrada de parche cerámico; soporte AGPS; GPS de alta sensibilidad |
| Antenna | Antena GNSS integrada de parche cerámico; antena GSM Pi‑Fa integrada |
| Memoria | 32 Mb de memoria interna |
| SIM | Micro SIM |
| Indicadores y Controles | Indicadores LED para estados de red/servidor, botón de reinicio, modo oculto |
| Físico | 107.5 x 38.7 x 22.8 mm; 66.5 g; carcasa impermeable IPX7 |
| Ambiental | Operación -30°C a +60°C \(carga 0°C a +45°C\); almacenamiento -40°C a +60°C; humedad 5%–95% sin condensación |
| Certificaciones | CE, FCC, NCC |
| Gestión Remota | Cable de actualización de firmware/depuración \(opcional\); actualización local de firmware mediante cable \(no se especifica FOTA en la nube\) |
| Accesorios | Incluye cable de alimentación y E/S de 8 pines, dos tiras de Velcro, Guía de inicio rápido. Opcional: relé, cable de alimentación OBDII, botón de emergencia externo, cable de encendedor, caja de pruebas, cable de firmware/depuración. |
| Bluetooth | No se describe un módulo Bluetooth \(Plaspy puede consolidar de forma separada los datos de sensores Bluetooth externos\) |

## Casos de Uso

- Gestión de flotas de vehículos ligeros y de motos: seguimiento en tiempo real, registros de viajes e informes basados en la ignición a través de Plaspy.
- Antirrobo e inmovilización remota para scooters y motocicletas: detección de movimiento, entrada de emergencia y control de relé permiten intervenciones impulsadas por Plaspy.
- Monitorización de micromovilidad compartida: su diseño compacto e impermeable es adecuado para flotas de alquiler de eBike y scooters que requieren instalación discreta.
- Telemática de vehículos y telemetría basada en voltaje: la entrada analógica permite la integración de sensado sencillo de combustible o voltaje de batería en los informes de Plaspy.
- Seguimiento de activos en entornos adversos: protección IPX7 y una carcasa robusta mantienen el dispositivo operativo en exteriores.

## Por qué Elegir Este Rastreador con Plaspy

El GTR‑388NB es una opción excelente cuando necesitas un rastreador GPS compatible con Plaspy que combine fiabilidad robusta, diseño compacto y conectividad NB‑IoT de bajo consumo. Su clasificación IPX7 a prueba de agua y su amplio rango de temperatura de operación lo hacen adecuado para instalaciones exteriores en vehículos, mientras que la batería de respaldo interna y el sensor de movimiento reducen falsas alertas y mejoran la continuidad de la monitorización. Para gestión de flotas y aplicaciones de anti‑robo, las entradas ACC y de emergencia, y la salida de relé proporcionan puntos de control prácticos para informes basados en ignición e integración de inmovilizador mediante Plaspy.

Porque el GTR‑388NB transmite vía NB‑IoT \(B3/B8/B20/B28\) con UDP, admite una cobertura eficiente de gran área con un uso mínimo de datos—ideal para despliegues extensos y reportes de telemetría. Plaspy aprovecha esos datos para ofrecer seguimiento en tiempo real, alertas personalizables, análisis de viajes históricos y acceso a APIs para integrarlo en sus sistemas operativos. Combinado con accesorios opcionales \(relé, cable OBDII, botón de emergencia\), el GTR‑388NB ofrece una solución escalable y de perfil bajo para gestionar scooters, motocicletas y otros vehículos ligeros con confianza.

