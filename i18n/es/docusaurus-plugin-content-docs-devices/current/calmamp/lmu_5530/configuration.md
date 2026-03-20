---
slug: /calmamp/lmu_5530/configuration
id: lmu_5530-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-5530 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar CalmAmp LMU-5530 con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración CalmAmp LMU-5530
  - Instalación CalmAmp LMU-5530
  - Integración LMU-5530 Plaspy
  - Configuración servidor LMU-5530
  - Configuración SMS LMU-5530
  - Configuración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Configuración plataforma GPS
  - Rastreo vehicular LMU-5530
  - Guía configuración CalmAmp
---

# CalmAmp - LMU-5530 Configuración

Esta página documenta el contexto de configuración pública para usar el CalmAmp LMU-5530 con Plaspy. Reúne los ajustes de servidor disponibles públicamente y ejemplos de comandos que puede utilizar para apuntar un LMU-5530 a Plaspy, de modo que la unidad reporte ubicación y estado del dispositivo a la plataforma. Use esta guía junto con la documentación del fabricante para una instalación completa.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LMU-5530 soporta métodos de gestión por SMS y OTA; los comandos que se muestran a continuación presentan un flujo común de configuración por SMS que está documentado públicamente.

## Resumen de la configuración

Este proceso prepara al LMU-5530 para comunicarse con Plaspy, configurando los detalles del APN del operador, el endpoint del servidor Plaspy y el puerto de reporte. El objetivo es asegurar que la unidad pueda establecer una sesión de datos GPRS/4G y enviar datos de seguimiento y eventos a Plaspy para su visualización y monitoreo.

- Configure el APN del operador y las credenciales APN opcionales para que la unidad pueda usar datos móviles.
- Apunte el dispositivo al endpoint del servidor Plaspy y establezca el puerto compartido usado por Plaspy.
- Seleccione el transporte (UDP o TCP) si el dispositivo exige una elección de transporte.
- Reinicie o aplique los ajustes para que el LMU-5530 se conecte al endpoint de Plaspy y comience a reportar.
- Verifique los ajustes y confirme que el dispositivo aparece en Plaspy una vez que informe correctamente.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando un dispositivo se conecte al endpoint del servidor.

## Requisitos típicos antes de la configuración

- Un LMU-5530 con alimentación y acceso a una red celular que soporte datos y SMS.
- Una tarjeta SIM con un plan de datos activo y capacidad de SMS, además de la información correcta del APN.
- Acceso al método de configuración que vaya a usar, como SMS, la interfaz web del fabricante o las herramientas OTA de CalAmp.
- El MID del dispositivo o la información de identificación requerida por su proceso de aprovisionamiento; algunos comandos dependen de un ID que responde la unidad.
- Detalles de cuenta o aprovisionamiento en Plaspy para confirmar que el dispositivo es visible tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurar el dispositivo para Plaspy, el LMU-5530 se ajusta para enviar sus datos de ubicación y eventos al endpoint y puerto compartido de Plaspy, de modo que la plataforma pueda mostrar y procesar los informes. Los siguientes puntos describen cómo opera típicamente la conexión desde una perspectiva práctica:

- La unidad abre una sesión de datos usando el APN configurado y luego inicia una conexión TCP o UDP hacia el endpoint de Plaspy.
- El LMU-5530 envía reportes periódicos y mensajes de evento al servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe los datos entrantes y detecta automáticamente el protocolo del rastreador para decodificar los mensajes.
- La plataforma actualiza la posición del dispositivo, su estado y las alertas, posibilitando el monitoreo operativo y la visibilidad de eventos.
- Los administradores validan que el dispositivo esté reportando correctamente dentro de la interfaz de Plaspy después de la configuración.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de CalmAmp que vaya a utilizar, como comandos SMS, el sistema CalAmp PULS OTA o una herramienta de configuración autorizada.
2. Ingrese el endpoint del servidor Plaspy, ya sea por dominio d.plaspy.com o por la IP 54.85.159.138 según la opción de configuración del dispositivo.
3. Establezca el puerto del servidor en 8888, que Plaspy usa para todos los dispositivos soportados.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su red y preferencia del dispositivo.
5. Configure el APN del operador y, si aplica, el nombre de usuario y la contraseña del APN para que el dispositivo pueda establecer la sesión de datos.
6. Aplique o guarde la configuración y reinicie la unidad si es necesario para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y aparezca con actualizaciones de posición en tiempo real o recientes.

## Comandos de ejemplo para configuración

El CalmAmp LMU-5530 puede configurarse por SMS usando comandos específicos. A continuación están los comandos SMS públicos y su propósito según la documentación del dispositivo. Envíe estos mensajes SMS al dispositivo en el orden mostrado al realizar una configuración manual por SMS.

- Establecer el APN del operador (reemplace {{apn}} con el APN de su operador):
```
!RP,2306,0,{{apn}}
```

- Establecer el nombre de usuario del APN del operador si se requiere (reemplace {{apnu}} con el usuario APN):
```
!RP,2314,0,{{apnu}}
```

- Establecer la contraseña del APN del operador si se requiere (reemplace {{apnp}} con la contraseña APN):
```
!RP,2315,0,{{apnp}}
```

- Establecer el servidor GPRS a Plaspy por IP (se muestra la IP del servidor Plaspy):
```
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor al puerto compartido de Plaspy:
```
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar cambios (opcional pero comúnmente requerido tras la configuración):
```
!R3,70,0
```

- Comprobar la configuración actual (comando de verificación según la documentación):
```
!RO
```

Notas sobre marcadores y identificadores:
- El ID referenciado por el flujo SMS del LMU-5530 es el MID de 10 dígitos que responde el comando !R0 según la documentación del dispositivo. Reemplace los valores de marcador como {{apn}}, {{apnu}} y {{apnp}} con las credenciales de su operador al enviar los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y las IDs de parámetros. Verifique la sintaxis exacta para el firmware de su unidad antes de enviar comandos SMS.
- El LMU-5530 admite configuración por SMS y actualizaciones OTA a través de CalAmp PULS; use el método que corresponda a su despliegue y políticas.
- Elija UDP o TCP según los requisitos de su red y de confiabilidad; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Confirme siempre las credenciales APN con el operador móvil para evitar problemas de conectividad de datos.
- Después de configurar el servidor y el puerto a Plaspy, valide los reportes en la plataforma Plaspy para asegurarse de que el dispositivo envíe los mensajes esperados.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp LMU-5530 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la visibilidad de vehículos y activos usando un endpoint compartido que detecta protocolos automáticamente. Las interfaces flexibles del LMU-5530 y su motor de eventos programable lo hacen adecuado para despliegues que requieren reglas de eventos personalizadas, reportes confiables y gestión remota cuando se combina con una plataforma que maneja automáticamente los protocolos entrantes.

Para saber más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante más actualizados, verifique la información en el sitio del fabricante http://www.calamp.com/ ya que los pasos de configuración y la sintaxis de comandos pueden cambiar con el tiempo.
