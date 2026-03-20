---
slug: /stars_nav/pt_35/configuration
id: pt_35-configuration
sidebar_label: Configuration
title: Stars Nav - PT-35 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el Stars Nav PT-35 y conectarlo a Plaspy con ajustes de servidor transporte y lista de verificación
keywords:
  - Stars Nav PT-35
  - configuración PT-35
  - instalación Stars Nav PT-35
  - configuración PT-35 Plaspy
  - configuración rastreador GPS PT-35
  - configuración rastreador Plaspy
  - rastreo de vehículos PT-35
  - rastreador personal PT-35
  - configuración servidor PT-35
  - configuración plataforma GPS
---

# Stars Nav — Configuración del PT-35

Esta página describe el contexto de configuración público para usar el Stars Nav PT-35 como rastreador personal con Plaspy. Explica los ajustes de servidor compartidos de Plaspy y los pasos prácticos que puede seguir en el lado del fabricante para apuntar el PT-35 a la plataforma Plaspy, permitiendo rastreo en tiempo real, alertas e informes históricos. La guía se basa en las capacidades del PT-35, que incluyen posicionamiento GNSS u‑blox, módem GSM cuatribanda con soporte para GPRS y SMS, almacenamiento en búfer de mensajes y comportamiento de energía y E/S configurable.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente protocolos de rastreadores; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El PT-35 soporta transporte por GPRS (TCP/IP) y SMS, por lo que puede configurarlo para enviar posiciones y eventos a Plaspy usando el endpoint y puerto comunes de Plaspy mediante los métodos de configuración de Stars Nav, como herramientas USB a serie o comandos por SMS.

## Resumen de la configuración

Este proceso prepara el PT-35 para comunicarse con Plaspy y asegurar que la telemetría de ubicación y eventos llegue de forma fiable a su cuenta Plaspy. Usted apuntará el equipo a los valores del servidor Plaspy, confirmará el transporte y la configuración de APN de la SIM y validará que el dispositivo reporte correctamente tras un reinicio o al aplicar la configuración.

- Configure el PT-35 para enviar reportes por GPRS (TCP/IP) o por SMS a Plaspy
- Verifique que el APN y los datos de la SIM sean correctos para que la unidad acceda a la red móvil
- Establezca el endpoint del servidor Plaspy y el puerto compartido para que el dispositivo alcance la plataforma
- Valide el reporte en vivo y la subida de mensajes en búfer para confirmar la visibilidad de extremo a extremo en Plaspy
- Pruebe las alertas de alarma, pánico y detección de movimiento para asegurar que la telemetría de eventos llegue a Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el PT-35 para Plaspy:

- Dominio del servidor Plaspy: d.plaspy.com
- IP del servidor Plaspy: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que puede usar consistentemente el puerto 8888 para los reportes del PT-35. Elija UDP o TCP en el dispositivo si el rastreador requiere una selección explícita de transporte.

## Requisitos típicos antes de la configuración

- Un PT-35 con alimentación y una tarjeta SIM activa que tenga datos habilitados para GPRS o capacidad de SMS si planea reportes por SMS
- Acceso al método oficial de configuración de Stars Nav, como herramientas USB a serie, la utilidad de configuración del proveedor o el conjunto de comandos SMS soportado
- Ajustes de APN correctos y cualquier credencial de SIM necesaria para que el dispositivo establezca una conexión GPRS
- Acceso físico al dispositivo para conectar entradas de pánico o sensores externos si necesita telemetría de E/S
- Batería cargada o fuente de alimentación constante para cambios de firmware y pruebas de conectividad
- Cobertura de red en la ubicación de la instalación para permitir la verificación inmediata del reporte a Plaspy

## Cómo se conecta este rastreador a Plaspy

El PT-35 envía posiciones GNSS y telemetría de eventos a Plaspy mediante sus capacidades de datos y mensajería GSM. Una vez configurado, el rastreador reporta al endpoint y puerto compartidos de Plaspy para que los datos sean visibles en Plaspy en mapas en vivo, alertas y reproducción histórica.

- Use GPRS (TCP/IP) para reenviar paquetes de posición y telemetría en vivo a d.plaspy.com en el puerto 8888
- Opcionalmente, envíe informes de estado o emergencia por SMS a Plaspy cuando la implementación lo soporte
- Los mensajes en búfer almacenados en el PT-35 se subirán al endpoint de Plaspy una vez que se restablezca el acceso a la red
- Eventos de movimiento, pánico y entradas digitales se reenvían a Plaspy para activar alertas y notificaciones
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpreta los datos entrantes sin necesidad de seleccionar un protocolo por dispositivo

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración Stars Nav para el PT-35, como la interfaz USB a serie o el conjunto de comandos SMS del proveedor.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los equipos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP de acuerdo con las necesidades de su despliegue.
5. Configure el APN y los parámetros de la SIM según lo requiera su operador móvil para habilitar la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método o firmware exige un reinicio para aplicar cambios.
7. Verifique que el dispositivo reporte a Plaspy comprobando las actualizaciones de posición o eventos entrantes en la plataforma; valide también la subida de mensajes en búfer después de la reconexión de red si procede.

## Ejemplos de comandos de configuración

El PT-35 puede configurarse mediante las herramientas de Stars Nav o por comandos SMS, dependiendo de la versión de firmware y la provisión del proveedor. Los comandos públicos exactos y la sintaxis usados por Stars Nav son proporcionados por el fabricante y pueden variar entre versiones de firmware. Como los comandos específicos son publicados por el fabricante, consulte la guía de configuración oficial de Stars Nav o el manual del dispositivo para las cadenas SMS precisas o los pasos de configuración por USB para establecer servidor, puerto, APN y opciones de transporte. Los métodos comunes del fabricante incluyen:

- Configuración por USB a serie usando la utilidad de configuración de Stars Nav
- Cadenas de comandos SMS para establecer servidor y valores de APN cuando el firmware lo soporte

Consulte la documentación de Stars Nav para ejemplos de comandos y la sintaxis exacta según el firmware de su dispositivo.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos y los flujos de trabajo de configuración; confirme siempre la versión de firmware del dispositivo antes de aplicar instrucciones.
- Elija UDP o TCP según la fiabilidad de su red y el comportamiento esperado de los mensajes; UDP es común para reportes de baja sobrecarga, mientras que TCP puede usarse cuando se requiere entrega garantizada y el dispositivo lo soporte.
- Verifique los ajustes de APN, nombre de usuario y contraseña de la tarjeta SIM para que las conexiones GPRS se establezcan de forma fiable con el operador móvil.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos y realiza detección automática de protocolo, solo necesita configurar la dirección del servidor compartido y el puerto en el dispositivo.
- Si utiliza SMS para aprovisionamiento o reportes, compruebe si el firmware de Stars Nav soporta el conjunto específico de funciones SMS que piensa emplear.

## Por qué usar Plaspy con esta configuración

Usar el Stars Nav PT-35 con Plaspy ofrece un camino sencillo hacia la visibilidad centralizada de ubicaciones, el monitoreo de eventos y la generación de informes históricos para seguridad personal, protección de activos y monitoreo de vehículos pequeños. Los modos de bajo consumo del PT-35, el almacenamiento en búfer de mensajes y la flexibilidad de E/S lo hacen adecuado para despliegues que requieren instalación discreta y reportes confiables a un único endpoint de Plaspy.

Para obtener más información sobre Plaspy y su integración con dispositivos como el PT-35 visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe verificar los detalles de instalación más recientes con Stars Nav en http://www.starsnav.com/ antes de finalizar un despliegue de producción.
