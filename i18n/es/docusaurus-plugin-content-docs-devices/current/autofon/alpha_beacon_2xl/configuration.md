---
slug: /autofon/alpha_beacon_2xl/configuration
id: alpha_beacon_2xl-configuration
sidebar_label: Configuration
title: AutoFon - Alpha-Beacon 2XL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon Alpha-Beacon 2XL para usar con los servidores de Plaspy y pasos prácticos
keywords:
  - Configuración AutoFon Alpha-Beacon 2XL
  - Configuración Alpha-Beacon 2XL Plaspy
  - Configuración rastreador AutoFon
  - Configuración GPS Alpha-Beacon 2XL
  - Configuración rastreador Plaspy
  - Configuración servidor rastreador GPS
  - Configuración rastreador de activos Plaspy
  - Configuración rastreador de vehículos
  - Integración Alpha-Beacon 2XL
  - Configuración dispositivo Plaspy
---

# AutoFon - Configuración Alpha-Beacon 2XL

Esta página describe el contexto de configuración pública para usar el AutoFon Alpha-Beacon 2XL con Plaspy. Se centra en los ajustes de servidor prácticos, el flujo de trabajo recomendado y los pasos de verificación que permiten al Alpha-Beacon 2XL reportar posición y telemetría a los servicios de supervisión de Plaspy mediante GPRS, SMS y la eSIM integrada.

Plaspy emplea parámetros de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos que usted deba realizar en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración AvtoFon que utilice. Use esta guía como referencia práctica y verifique las instrucciones del fabricante para detalles específicos del dispositivo.

## Visión general de la configuración

El objetivo de la configuración es preparar el Alpha-Beacon 2XL para enviar datos de ubicación y estado al endpoint del servidor de Plaspy, de modo que el dispositivo aparezca en el entorno de supervisión. Normalmente se define el host o IP del servidor Plaspy, el puerto común y se selecciona el método de transporte que el rastreador utilizará para entregar la telemetría.

- Apunte el dispositivo al endpoint de Plaspy d.plaspy.com o a la IP equivalente 54.85.159.138 y use el puerto 8888 para el reporte.
- Seleccione el método de transporte que soporte el rastreador, UDP o TCP, si el equipo requiere una selección explícita.
- Verifique que la eSIM integrada y la conexión GPRS estén activas para que el dispositivo pueda enviar paquetes a Plaspy.
- Confirme que los reportes llegan a Plaspy y aparecen en la interfaz de monitoreo para que los eventos y la telemetría histórica sean visibles.
- Use las herramientas de configuración AvtoFon KSA o las del fabricante para aplicar y guardar los ajustes si el firmware del dispositivo lo requiere.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: Soporta UDP o TCP en el puerto 8888 según la capacidad del dispositivo
- Notas de la plataforma Plaspy: Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos entrantes

## Requisitos típicos antes de la configuración

- El Alpha-Beacon 2XL debe tener alimentación y batería interna cargada o alimentación externa temporal durante la configuración.
- La eSIM integrada debe estar provisionada y activa para disponer de reporte por GPRS desde el dispositivo.
- Acceso al método de configuración oficial de AvtoFon o a la cuenta KSA para cambiar parámetros del dispositivo.
- Cobertura GPRS en vivo para el dispositivo o capacidad SMS para reporte de respaldo y verificación inicial.
- Una cuenta Plaspy o integración preparada para recibir los datos del dispositivo y confirmar su visibilidad en la plataforma.
- Acceso físico o método de configuración remota según exija la instalación y el firmware para aplicar nuevos parámetros de servidor.

## Cómo se conecta este rastreador a Plaspy

El Alpha-Beacon 2XL envía ubicación y telemetría al endpoint y puerto compartidos de Plaspy, de modo que los reportes de posición, alertas SOS y eventos almacenados sean visibles en la supervisión de Plaspy. Plaspy recibe los paquetes entrantes en el puerto común y utiliza detección automática de protocolo para interpretar los datos del rastreador.

- Reporte primario por GPRS al endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El reporte por SMS puede usarse como respaldo o para enviar mensajes vinculados al mapa cuando lo permita la plataforma del fabricante.
- La lógica de reintento del dispositivo y la caja negra integrada aumentan las probabilidades de que eventos importantes se transmitan a Plaspy.
- Los reportes enviados a Plaspy aparecen como actualizaciones en tiempo real y la telemetría histórica está disponible para revisión de incidentes.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita proporcionar la información correcta del servidor y el puerto.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración AvtoFon, como la interfaz web o móvil AvtoFon KSA, o a la herramienta de configuración del fabricante incluida con el dispositivo.
2. Localice la sección de servidor o telemetría para monitoreo externo y configure el host del servidor a d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según sus necesidades de despliegue y la capacidad del equipo.
5. Guarde o aplique la configuración en la herramienta del fabricante y envíe los ajustes al Alpha-Beacon 2XL.
6. Reinicie el dispositivo si el proceso de configuración o el firmware requiere un reboot para aplicar los parámetros de red.
7. Valide la conectividad confirmando que el dispositivo reporta correctamente a Plaspy y que los datos de ubicación y eventos aparecen en el entorno de monitoreo.

## Comandos de configuración de ejemplo

El Alpha-Beacon 2XL normalmente se configura mediante las herramientas de AvtoFon o la cuenta AvtoFon KSA. Los formatos exactos de comandos y las cadenas SMS pueden variar según el firmware, la revisión de hardware o el aprovisionamiento del proveedor, por lo que la herramienta del fabricante es el método recomendado para establecer el servidor de Plaspy. Si configura manualmente, asegúrese de introducir d.plaspy.com o 54.85.159.138 y el puerto 8888 y seleccione UDP o TCP si el rastreador lo requiere. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo comience a enviar paquetes.

## Notas de configuración

- Las variaciones de firmware pueden cambiar dónde y cómo se introducen los parámetros del servidor; siempre revise las notas del firmware antes de aplicar ajustes.
- TCP ofrece transporte orientado a conexión mientras que UDP es sin conexión; elija el transporte que el dispositivo soporte y que se ajuste a sus requisitos de fiabilidad y latencia.
- Dado que el Alpha-Beacon 2XL usa una eSIM integrada, confirme el estado de aprovisionamiento y la disponibilidad del plan de datos antes de intentar el reporte por GPRS.
- El dispositivo soporta respaldo por SMS para alertas críticas si está configurado por el fabricante; use SMS para la verificación inicial cuando no haya GPRS disponible.
- Utilice las herramientas de gestión AvtoFon KSA cuando sea posible para simplificar el cambio de parámetros y beneficiarse de la guía específica del firmware.

## Por qué usar Plaspy con esta configuración

Usar Plaspy para recolectar los reportes del Alpha-Beacon 2XL brinda a las organizaciones visibilidad centralizada de los activos protegidos por este rastreador de bajo mantenimiento y larga duración. Plaspy recibe y organiza actualizaciones de ubicación en tiempo real y telemetría histórica para que usted pueda monitorear movimientos, recibir alertas SOS y revisar eventos almacenados por el dispositivo para procesos de recuperación y análisis.

Learn more about Plaspy and how Plaspy can integrate device data at https://www.plaspy.com. Device specific configuration steps, firmware behavior, and provisioning details can change over time, so verify the latest setup and firmware guidance with the manufacturer at https://www.autofon.ru/.
