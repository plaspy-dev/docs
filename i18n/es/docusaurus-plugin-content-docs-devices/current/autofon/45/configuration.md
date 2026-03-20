---
slug: /autofon/45/configuration
id: 45-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon Маяк 4.5 para prepararlo y conectarlo a los servidores de Plaspy
keywords:
  - AutoFon Маяк 4.5 configuración
  - AutoFon Маяк 4.5 instalación
  - compatibilidad AutoFon con Plaspy
  - configuración del servidor AutoFon
  - configuración GPS Маяк 4.5
  - ajustes de servidor rastreador GPS
  - configuración de seguimiento de vehículos
  - seguimiento de activos Plaspy
  - configuración de rastreador GPRS
  - integración de rastreador por SMS
---

# AutoFon - Маяк 4.5 Configuración

Esta página describe la configuración pública necesaria para utilizar el rastreador AutoFon Маяк 4.5 con Plaspy. Explica los pasos prácticos desde el lado del fabricante y los parámetros compartidos del servidor Plaspy que debe aplicar en el dispositivo para que envíe posiciones y telemetría a la plataforma. La información se basa en la descripción del equipo y en patrones comunes de integración para el modo por intervalos GPRS y reportes por SMS.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante y los nombres de menú pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía debe considerarse como referencia práctica de los ajustes públicos y el flujo de trabajo necesarios para conectar el Маяк 4.5 a Plaspy.

## Resumen de configuración

El objetivo es preparar el Маяк 4.5 para que informe de forma fiable la ubicación y el estado a Plaspy mediante paquetes GPRS por intervalos o por SMS cuando corresponda. Debe apuntar el rastreador al endpoint de Plaspy, verificar la conectividad y asegurarse de que el comportamiento del dispositivo se ajuste a los intervalos de seguimiento y alertas que necesita.

- Configure el equipo para enviar paquetes GPRS por intervalos al endpoint de Plaspy d.plaspy.com en el puerto 8888 para que Plaspy reciba la telemetría.
- Verifique que el rastreador pueda enviar reportes por SMS a números autorizados si piensa usar SMS para alertas o como método de respaldo.
- Valide la disponibilidad de red y la SIM para que el Маяк 4.5 pueda establecer sesiones GPRS y entregar paquetes.
- Confirme el reporte del dispositivo comprobando los datos entrantes en Plaspy y observando actualizaciones en el mapa y notificaciones de eventos.
- Guarde y aplique los ajustes en el dispositivo y reinícielo si es necesario para activar los nuevos parámetros del servidor.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el Маяк 4.5:

- Dominio del servidor d.plaspy.com para configuración basada en DNS
- IP del servidor 54.85.159.138 como endpoint alternativo si el firmware del dispositivo requiere una IP
- Puerto 8888 que es el puerto compartido usado por Plaspy para todos los dispositivos compatibles
- Soporte de transporte UDP o TCP según el menú del dispositivo; el Маяк 4.5 puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al endpoint de Plaspy y escoger el transporte requerido por el rastreador

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará e interpretará el protocolo del rastreador en cuanto los paquetes lleguen al servidor.

## Requisitos previos a la configuración

- Una unidad AutoFon Маяк 4.5 encendida y funcional, lista para configuración y con batería suficiente o alimentación externa.
- Una tarjeta SIM GSM activa con datos habilitados y el APN correcto configurado para el envío de paquetes GPRS.
- Acceso al método o software oficial de configuración de AutoFon para introducir servidor, puerto y ajustes de transporte.
- Cobertura de red en la zona de instalación prevista para conectividad GSM y GPRS.
- Conocimiento de cualquier PIN del dispositivo o ajustes de autorización necesarios para aceptar comandos remotos o configuración por SMS.
- Una cuenta en Plaspy y acceso a la plataforma para verificar los reportes entrantes y las marcas en el mapa tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el Маяк 4.5 envía datos de ubicación y estado al endpoint compartido de monitoreo de Plaspy para que la plataforma pueda mostrar posiciones, alertas de eventos e historial. El dispositivo admite tanto el modo por paquetes GPRS como alertas por SMS como vía secundaria.

- El rastreador se apunta a d.plaspy.com (o a 54.85.159.138) y envía paquetes GPRS por intervalos al puerto 8888.
- Plaspy recibe los paquetes y detecta automáticamente el protocolo del rastreador para decodificar posiciones y telemetría.
- Eventos de movimiento, manipulación y estado de alimentación se transmiten a Plaspy para generar alertas y alarmas.
- Los SMS pueden usarse para alertas inmediatas o respuestas a comandos remotos a números autorizados además del reporte por paquetes al servidor.
- Una configuración correcta se traduce en actualizaciones en vivo en el mapa y trazas históricas visibles en la interfaz de Plaspy.

## Procedimiento de configuración

1. Acceda al método o software de configuración oficial de AutoFon proporcionado por el fabricante o su instalador.
2. Introduzca el servidor de Plaspy como d.plaspy.com o, si el firmware lo exige, la IP 54.85.159.138.
3. Establezca el puerto de destino en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere elegir uno.
5. Asegúrese de que el APN y los ajustes de datos de la SIM sean correctos para el reporte por GPRS si utiliza el modo por paquetes.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para activar los ajustes.
7. Valide que el equipo reporte a Plaspy comprobando en el panel de Plaspy las posiciones y eventos entrantes.

## Ejemplo de comandos de configuración

Los comandos y la sintaxis exacta para configurar el Маяк 4.5 dependen de la herramienta del fabricante, del conjunto de comandos por SMS o de la utilidad de configuración de escritorio que proporcione AutoFon. Dado que los comandos y formatos SMS específicos los suministra el fabricante, no se reproducen aquí. Consulte el manual oficial de configuración de AutoFon para conocer los formatos de SMS o consola necesarios para establecer servidor, puerto, APN y transporte.

Si su firmware soporta configuración por SMS, los patrones públicos típicos para rastreadores similares incluyen el envío de SMS o el uso de la app del proveedor para definir dominio y puerto del servidor, seguido del guardado y reinicio del dispositivo. Utilice siempre la documentación oficial de AutoFon para la sintaxis exacta de los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de menú y los formatos aceptados de comandos; confirme las cadenas exactas con la documentación de AutoFon para su revisión del dispositivo.
- Elija UDP o TCP en función del soporte del equipo y la fiabilidad de la red; UDP es habitual para reportes periódicos de baja sobrecarga, mientras que TCP puede ofrecer garantías de sesión si está soportado.
- Si usa modo por intervalos GPRS, asegúrese de que el APN de la SIM esté configurado correctamente y de que el plan de datos permita conexiones salientes.
- SMS puede ser un respaldo fiable para alertas críticas, pero el formato de los SMS y la gestión de números autorizados la controla el firmware del dispositivo y el conjunto de comandos SMS del fabricante.
- Aplicar ajustes y reiniciar el dispositivo tras la configuración es un requisito común para asegurar que los nuevos parámetros del servidor entren en vigor.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon Маяк 4.5 con Plaspy ofrece una vía sencilla para recibir actualizaciones periódicas de ubicación y alertas de eventos desde un rastreador compacto y de larga autonomía. Para despliegues que priorizan bajo mantenimiento e instalaciones discretas, configurar el dispositivo para que envíe paquetes GPRS por intervalos a Plaspy permite visibilidad centralizada, monitorización de eventos e informes históricos sin necesidad de gestión continua en sitio.

Learn more about Plaspy and how it handles tracker data at https://www.plaspy.com. For device specific commands, firmware notes, and the most current setup procedures for the AutoFon Маяк 4.5 consult the manufacturer at https://www.autofon.ru/ since firmware behavior and configuration methods can change over time.
