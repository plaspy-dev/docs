---
slug: /gotop/d16/configuration
id: d16-configuration
sidebar_label: Configuration
title: GOTOP - D16 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP D16 con ajustes de servidor compatibles con Plaspy y pasos para rastreo en vivo de bicicletas
keywords:
- Configuración GOTOP D16
- Instalación GOTOP D16
- Configuración de servidor GOTOP D16
- Integración Plaspy
- Configuración rastreador GPS GOTOP
- Configuración D16 para bicicleta
- Configuración rastreador GPS para bicicleta
- GOTOP D16 en Plaspy
- Configuración de seguimiento de flotas
- Ajustes de servidor para rastreador GPS
---

# GOTOP - Configuración D16

Esta página documenta el contexto público de configuración para usar el rastreador GPS para bicicletas GOTOP D16 con Plaspy. Se enfoca en los valores de servidor y el flujo de trabajo prácticos necesarios para que el D16 pueda reportar ubicación y eventos a Plaspy, permitiendo monitoreo en tiempo real, alertas de geocercas y reproducción de rutas.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el D16 pueden variar según versión de firmware, región, revisión de hardware y la herramienta de configuración que proporcione GOTOP; por ello, considere la información aquí como los valores prácticos desde la perspectiva de Plaspy y como guía de procedimiento. Siempre confirme los controles específicos del dispositivo con la documentación de GOTOP.

## Resumen de la configuración

El objetivo de esta configuración es preparar el D16 para comunicarse de forma confiable con la nube de Plaspy, de modo que los dispositivos aparezcan en la plataforma y entreguen eventos de ubicación y alarmas en tiempo. Esto incluye aplicar el endpoint de servidor de Plaspy, asegurar conectividad móvil y validar que las transmisiones lleguen a Plaspy.

- Configure el dispositivo para reportar al endpoint compartido de Plaspy y el mismo puerto usado por todos los dispositivos Plaspy.
- Asegúrese de que el D16 tenga conectividad 4G activa y batería cargada para poder enviar actualizaciones de posición.
- Seleccione el transporte apropiado (UDP o TCP) si el dispositivo requiere una opción.
- Guarde y aplique la configuración, luego confirme que el dispositivo sea visible y esté reportando en Plaspy.
- Valide el envío de eventos como alertas de geocerca y notificaciones de batería baja una vez que esté en línea.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el D16:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888
- Plaspy automatically detects the tracker protocol so the platform will ingest compatible packets sent to the above endpoint

Plaspy utiliza el mismo puerto para todos los dispositivos soportados y determinará automáticamente el protocolo del equipo cuando lleguen los paquetes al endpoint.

## Requisitos típicos antes de la configuración

- Un GOTOP D16 encendido y con la batería cargada o con conexión de alimentación del vehículo.
- Conectividad celular activa para el dispositivo (el D16 emplea conectividad 4G LTE según el modelo).
- Acceso al método o software oficial de configuración del dispositivo proporcionado por GOTOP; esto puede ser una herramienta del proveedor, una app de configuración o una interfaz de configuración—consulte la documentación de GOTOP.
- Los ajustes de servidor de Plaspy contenidos en esta página (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para introducir en la configuración del dispositivo.
- Un método para probar y validar las conexiones salientes desde el dispositivo (revisión de logs, LEDs indicadores del dispositivo o la lista de dispositivos en Plaspy) después de aplicar los ajustes.

## Cómo se conecta este rastreador a Plaspy

Cuando el D16 se configura para Plaspy, envía sus paquetes de ubicación y estado por datos celulares al endpoint compartido de Plaspy en el puerto acordado. Plaspy ingiere esos paquetes, interpreta automáticamente el protocolo del dispositivo y actualiza el mapa y el historial de eventos para operadores y usuarios.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (54.85.159.138) en el puerto 8888.
- Los paquetes pueden enviarse usando UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea la telemetría entrante al registro del dispositivo.
- Una vez que el reporte es exitoso, las posiciones, eventos de geocerca y el estado de batería quedan visibles en Plaspy para monitoreo y alertas.
- Los operadores pueden usar los paneles de Plaspy para recibir notificaciones y revisar el historial de rutas generado por los reportes del D16.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración GOTOP para el D16 proporcionado por el fabricante.
2. En la configuración de servidor del dispositivo o en la sección APN correspondiente, introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 según aplique.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección; Plaspy acepta ambos en el puerto 8888.
5. Aplique o guarde la configuración en el dispositivo o en la herramienta del proveedor.
6. Reinicie o ciclé el suministro de energía del D16 si el proceso de configuración requiere un reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando su aparición y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El fabricante del D16 puede ofrecer múltiples vías de configuración (herramientas del proveedor, interfaces web de firmware o métodos OTA). Los formatos exactos de comandos y las herramientas varían según el firmware y el modelo regional de GOTOP. Como GOTOP proporciona interfaces específicas para cada dispositivo, esta página no inventa comandos de dispositivo. Consulte la guía de configuración de GOTOP o su herramienta de proveedor para la sintaxis exacta de comandos y ejemplos al realizar cambios de servidor y puerto.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración y las opciones disponibles; consulte siempre la documentación de GOTOP para su revisión de equipo.
- Plaspy acepta tanto UDP como TCP en el puerto 8888. Si tiene una opción de transporte, elija la que se alinee con las prácticas del instalador o la estabilidad de la red; Plaspy detectará automáticamente los detalles del protocolo.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo; algunos instaladores prefieren nombres de dominio para evitar cambios de IP, mientras que otros usan IP en herramientas de configuración limitadas.
- Después de aplicar los ajustes, espere varios minutos para que el dispositivo se reconecte y para que Plaspy detecte el protocolo y registre la telemetría entrante.
- Confirme el APN y los ajustes celulares en el D16 según sea necesario para la conectividad 4G; estos ajustes se gestionan en el lado del dispositivo y son necesarios para la entrega de datos a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D16 con Plaspy ofrece a flotas de bicicletas y a ciclistas individuales visibilidad en tiempo real de la ubicación, alertas de geocercas e historial de rutas en una sola plataforma. La ingestión centralizada y la detección automática de protocolos de Plaspy reducen la complejidad de configuración en el lado de la plataforma al aceptar el tráfico de dispositivos en un endpoint y puerto compartidos, permitiendo a los operadores centrarse en el despliegue y la operación.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest D16 device specific setup and firmware details on the manufacturer site https://www.gotop.cc/. Manufacturer configuration methods and firmware behavior can change over time, so always confirm the current device documentation for the most accurate instructions.
