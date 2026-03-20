---
slug: /autofon/se_beacon/protocol
id: se_beacon-protocol
sidebar_label: Protocol
title: AutoFon - SE+ Beacon Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del AutoFon SE+ Beacon y su comunicación con Plaspy para telemetría y rastreo GPS
keywords:
  - protocolo AutoFon SE+ Beacon
  - protocolo GPS AutoFon SE+ Beacon
  - protocolo de comunicación AutoFon SE+ Beacon
  - protocolo de rastreo AutoFon SE+ Beacon
  - compatibilidad Plaspy con trackers
  - rastreador GPS AutoFon Plaspy
  - SE+ Beacon GPRS SMS
  - protocolo de rastreo vehicular
  - protocolo de rastreo de activos
  - rastreador GPS GLONASS
---

# AutoFon - Protocolo SE+ Beacon

Esta página describe el contexto público del protocolo y las consideraciones de integración para usar el AutoFon SE+ Beacon con Plaspy. Se centra en el contexto de comunicación y conexión relevante cuando el SE+ Beacon informa posiciones y eventos a la plataforma Plaspy, sin exponer detalles privados de implementación ni estructuras de paquetes propietarias.

El SE+ Beacon es un rastreador GPS compacto y de larga autonomía que combina posicionamiento GPS y GLONASS con reporte por GPRS y retroceso por SMS. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker. El endpoint público del servidor de Plaspy es alcanzable en d.plaspy.com y en la dirección IP 54.85.159.138 en el puerto 8888. El equipo puede configurarse para usar UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante.

## Resumen del protocolo

El protocolo del dispositivo define cómo el SE+ Beacon se identifica, reporta posiciones GNSS y entrega alertas de eventos a un endpoint remoto como Plaspy. En términos prácticos, el protocolo es el conjunto de mensajes que el tracker envía por GPRS o SMS y las respuestas o latidos esperados para mantener una conexión confiable.

- Permite al SE+ Beacon enviar actualizaciones periódicas de posición y telemetría de eventos a Plaspy para visualización en mapas y generación de alertas.
- Transporta eventos de movimiento, inclinación, impacto, SOS e entradas de alarma para que Plaspy genere notificaciones y registre el historial correspondiente.
- Incluye mensajes de latido o señal de vida que ayudan a Plaspy a monitorear la disponibilidad del dispositivo y condiciones como batería baja u offline.
- Utiliza GPRS como reporte en tiempo real principal y SMS como canal de respaldo para alertas o cuando la conectividad de datos no está disponible.
- Funciona en conjunto con la estrategia de buffer offline del dispositivo para que los datos almacenados se reenvíen a Plaspy cuando se restablezca la conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones entrantes en un endpoint único y compartido y determinar automáticamente qué protocolo de tracker está usando un dispositivo. Cuando un SE+ Beacon se configura para reportar a Plaspy, por lo general no es necesario seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del tracker a medida que el dispositivo empieza a reportar, lo que simplifica la configuración para integradores.
- En la mayoría de los casos solo debe configurar el SE+ Beacon para apuntar a d.plaspy.com o 54.85.159.138 y usar el puerto 8888.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos compatibles, los administradores no necesitan múltiples puertos por tipo de dispositivo.
- La configuración correcta del dispositivo y el enrutamiento de red son los prerrequisitos habituales para que la detección automática funcione de forma fiable.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el dispositivo alcanza Plaspy más que la estructura interna de los mensajes. El SE+ Beacon puede usar GPRS para establecer conexiones TCP o UDP al endpoint de Plaspy, y SMS se utiliza cuando no hay datos o como respaldo para alertas.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración del operador.
- Apunte el tracker a d.plaspy.com o a 54.85.159.138 y utilice el puerto 8888 para ambas opciones de transporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que agiliza el enrutamiento del lado del servidor y simplifica la configuración de los equipos.
- GPRS es el transporte habitual para reportes en tiempo real; SMS es un canal secundario para alertas o reportes de emergencia cuando no hay datos.
- Asegúrese de que la SIM del dispositivo y la red móvil permitan sesiones GPRS y que la configuración APN coincida con los requisitos del proveedor móvil para una entrega de datos fiable.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el tiempo entre mensajes, los tipos de eventos disponibles y el comportamiento de ahorro de energía; verifique la versión de firmware al validar el comportamiento.
- Revisiones de hardware como la plataforma v.6.x y componentes como el módulo GSM SIM800H y el módulo GNSS SIM68M pueden influir en las funciones soportadas y en el desempeño radioeléctrico.
- La elección de transporte (UDP vs TCP) puede afectar el consumo de batería y la capacidad de respuesta; elija el transporte más apropiado para su despliegue y confirme la configuración en el dispositivo.
- El comportamiento de fallback por SMS y los formatos de mensajes pueden variar; valide los parámetros de alertas por SMS si depende de este canal para notificaciones críticas.
- Una gran capacidad de buffer offline y la posibilidad de actualizaciones remotas de firmware mejoran la resiliencia, pero dependen de la compilación de firmware y la configuración específica.
- Siempre contraste los puntos de compatibilidad con la documentación del fabricante y las notas de la versión para entender el comportamiento particular del dispositivo.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del SE+ Beacon ayuda a garantizar una configuración fiable, un mapeo preciso de eventos y una resolución de problemas eficiente al usarlo con Plaspy. Saber qué informará el tracker y cómo llega al servidor reduce el tiempo de integración y favorece un desempeño operativo predecible.

- Ayuda a verificar que el dispositivo esté apuntando al endpoint y transporte correctos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Orienta las decisiones sobre intervalos de latido, compensaciones de vida de batería y buffering offline para ajustar el funcionamiento a sus necesidades operativas.
- Simplifica la resolución de problemas al clarificar si un problema es de red, de transporte o de configuración del dispositivo.
- Permite interpretar correctamente tipos de eventos como movimiento, inclinación, impacto y SOS en los paneles y alertas de Plaspy.
- Facilita la planificación de actualizaciones remotas de firmware y la gestión de despliegues de firmware en una flota.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon SE+ Beacon con Plaspy ofrece una manera directa de convertir telemetría de posición y eventos optimizada para batería en visualización en mapas, alertas y reproducción histórica. El reporte primario por GPRS y el respaldo por SMS del SE+ Beacon, junto con sus alertas basadas en sensores y su amplio buffer offline, lo hacen adecuado para escenarios discretos de rastreo de vehículos y activos donde la autonomía y la resiliencia son importantes.

Si está evaluando el SE+ Beacon para un despliegue operativo, la detección automática de protocolo de Plaspy y el enfoque de puerto unificado reducen la carga de configuración y ayudan a que los dispositivos comiencen a reportar rápidamente. Para conocer más sobre cómo funciona Plaspy y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener las especificaciones más recientes del dispositivo, detalles de firmware y orientación del fabricante para el AutoFon SE+ Beacon, verifique la información en el sitio de AutoFon https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
