---
slug: /riti/sls_00886/configuration
id: sls_00886-configuration
sidebar_label: Configuration
title: Riti - SLS-00886 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Riti SLS-00886 a los servidores Plaspy usando ajustes compartidos
keywords:
  - Riti SLS 00886 configuración
  - Riti SLS 00886 instalación
  - configuración rastreador GPS Riti
  - configuración servidor SLS 00886
  - configuración Plaspy rastreador
  - configuración plataforma GPS
  - instalación seguimiento vehicular
  - configuración rastreador GPRS
  - configuración SMS GPRS rastreador
  - rastreador para gestión de flotas
---

# Riti - Configuración SLS-00886

Esta página ofrece el contexto público de configuración para usar el rastreador vehicular Riti SLS-00886 con la plataforma Plaspy. Resume los ajustes de servidor y el flujo de trabajo prácticos necesarios para apuntar el dispositivo a Plaspy para informes en tiempo real y visibilidad en la plataforma, manteniendo la orientación general y neutral respecto al proveedor.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta del proveedor usada para configurar el equipo. Use esta página para preparar el dispositivo y confirmar la conexión con Plaspy, y consulte la documentación oficial de Riti para comandos y herramientas específicas del dispositivo.

## Resumen de la configuración

Configurar el SLS-00886 para Plaspy se centra en preparar el rastreador para que envíe su ubicación y estado al punto de conexión compartido de Plaspy, validar la conectividad sobre la red móvil y confirmar que el dispositivo aparece en la plataforma Plaspy. El proceso consiste principalmente en establecer correctamente el endpoint del servidor, el puerto, el transporte y asegurarse de que el dispositivo tenga acceso de red válido.

- Configure el rastreador para que reporte al endpoint de Plaspy, de modo que las actualizaciones GPRS lleguen a la plataforma
- Asegúrese de que la SIM y los datos móviles estén activos para que el dispositivo pueda abrir sesión en Plaspy
- Seleccione el modo de transporte requerido por el firmware del dispositivo y confirme la compatibilidad con Plaspy
- Guarde y aplique los ajustes en el dispositivo y realice una validación de conexión para que el equipo sea visible en Plaspy
- Verifique el reporte por SMS como método de reserva si el dispositivo está configurado para enviar alertas por SMS

## Ajustes del servidor Plaspy

- servidor domain d.plaspy.com
- servidor IP 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

Estos valores son los ajustes públicos compartidos que Plaspy usa para todos los rastreadores compatibles. El SLS-00886 puede configurarse para usar UDP o TCP en el puerto 8888 para alcanzar el endpoint de Plaspy.

## Requisitos antes de la configuración

- Un rastreador Riti SLS-00886 con alimentación y funcionando, instalado o en banco de pruebas para la configuración inicial
- Una tarjeta SIM activa con datos móviles habilitados y cobertura suficiente para reportes GPRS
- Acceso al método oficial de configuración de Riti o al software correspondiente y la lista de comandos SMS del fabricante si aplica
- El IMEI o número de serie del dispositivo disponible para el registro en la plataforma y la resolución de problemas
- Conocimientos básicos sobre si el firmware del rastreador exige elegir UDP o TCP como transporte
- Capacidad para reiniciar el dispositivo después de aplicar cambios de configuración

## Cómo se conecta este rastreador a Plaspy

El SLS-00886 envía coordenadas de ubicación y actualizaciones de estado a un back end a través de la red GPRS y también puede enviar alertas por SMS a números de usuario. Al integrarlo con Plaspy, el rastreador se apunta al endpoint compartido de Plaspy y al puerto correspondiente para que la plataforma reciba y procese los datos entrantes para monitoreo en tiempo real.

- Configure el equipo para reportar datos GPRS a d.plaspy.com o a 54.85.159.138
- Use el puerto 8888 para todo el reporte de datos a Plaspy
- Elija UDP o TCP según el firmware del dispositivo o la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes
- Confirme el reporte del dispositivo en la plataforma Plaspy después de aplicar los ajustes

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Riti o al software provisto por el fabricante o prepárese para usar el conjunto de comandos SMS de Riti si está admitido
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la opción de servidor del rastreador
3. Establezca el puerto en 8888 como puerto de destino del rastreador
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte durante la configuración
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o mediante la confirmación por SMS
6. Reinicie el rastreador si el dispositivo necesita un reinicio para aplicar los ajustes de red
7. Valide que el equipo reporte correctamente a Plaspy comprobando los datos entrantes en la plataforma o usando comandos de verificación proporcionados por Riti

## Ejemplos de comandos de configuración

El SLS-00886 admite configuración mediante herramientas del fabricante y comandos SMS/GPRS, pero la sintaxis exacta y el orden pueden variar según el firmware y las compilaciones regionales. Debido a que los conjuntos de comandos del fabricante pueden cambiar, no se incluyen comandos universales aquí. Consulte la guía oficial de configuración de Riti o la lista de comandos SMS suministrada con el dispositivo para las cadenas exactas que configuran servidor, puerto, transporte y APN.

Si dispone de la lista de comandos de Riti, siga su orden para la configuración del servidor y del APN, por ejemplo usando la herramienta suministrada o el flujo de comandos por SMS, y luego verifique el reporte a d.plaspy.com en el puerto 8888. Contacte a su vendedor o a Riti para obtener la sintaxis de comandos más actual.

## Notas sobre la configuración

- Las diferencias de firmware entre lotes de producción pueden cambiar nombres de menú o la sintaxis de comandos SMS; siempre verifique la versión de firmware del dispositivo antes de aplicar instrucciones
- La elección entre TCP y UDP puede afectar las características de entrega; pruebe ambas opciones si encuentra problemas de conectividad o de interpretación de mensajes
- Si el dispositivo requiere un APN para GPRS, configure el APN de acuerdo con su operador móvil usando la herramienta oficial de Riti o comandos SMS
- SMS puede usarse como método de configuración o como respaldo de alertas cuando la conectividad GPRS sea poco fiable
- Mantenga a mano el IMEI del dispositivo y un registro de la configuración para el registro en la plataforma y la resolución de problemas

## Por qué usar Plaspy con esta configuración

Usar el Riti SLS-00886 con Plaspy ofrece una forma sencilla de incorporar el reporte de ubicación por GPRS en una sola plataforma de gestión de flotas. Con el endpoint compartido de Plaspy y la detección automática del protocolo, una vez que el SLS-00886 apunta al servidor de Plaspy puede enviar actualizaciones de posición y eventos para visibilidad, monitoreo de rutas y supervisión operativa.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para verificar las instrucciones de configuración específicas del dispositivo, el comportamiento del firmware y los detalles del fabricante consulte Riti en https://www.riti.com.tw/ para la documentación más reciente.
