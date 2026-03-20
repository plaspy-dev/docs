---
slug: /xexun/u02/configuration
id: u02-configuration
sidebar_label: Configuration
title: Xexun - U02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun U02 para Plaspy con ajustes de servidor compartido y comandos SMS para reporte GPRS
keywords:
  - configuración Xexun U02
  - instalación Xexun U02
  - configuración de servidor Xexun U02
  - integración U02 Plaspy
  - comandos SMS U02
  - configuración GPRS U02
  - configuración posicionamiento interior U02
  - configuración rastreador Plaspy
  - configuración de rastreador wearable
  - rastreador UWB Plaspy
---

# Xexun - Configuración U02

Esta página documenta el contexto público de configuración para usar el Xexun U02 con Plaspy. Se centra en los ajustes prácticos del servidor, el flujo de configuración habitual y los comandos SMS públicos para habilitar el reporte GPRS hacia la plataforma Plaspy. Use esta guía para preparar el dispositivo y entender los valores que debe reportar para que Plaspy lo muestre correctamente.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El U02 también admite configuración vía SMS según la documentación pública del fabricante; cuando se muestran comandos SMS más adelante, siguen el formato del fabricante y mantienen los marcadores {{apn}}, {{apnu}} y {{apnp}}.

## Resumen de configuración

Este proceso prepara el U02 para reenviar ubicación y telemetría de sensores a la plataforma Plaspy usando los ajustes de servidor compartidos. El objetivo práctico es configurar la conexión de red del equipo, verificar la conectividad y habilitar el reporte continuo para que Plaspy muestre ubicaciones en tiempo real, eventos de manipulación y telemetría.

- Configure el U02 para que use Plaspy como punto de envío GPRS para que los datos de ubicación y eventos lleguen a la plataforma.  
- Proporcione las credenciales APN del operador y active el modo GPRS para que el dispositivo establezca la conexión de datos.  
- Valide que el dispositivo esté reportando al servidor y puerto de Plaspy y que los mensajes aparezcan en la plataforma.  
- Aplique los ajustes mediante SMS o la herramienta de configuración del fabricante cuando esté disponible y guarde los cambios.  
- Verifique que los eventos de manipulación, emergencia y telemetría sean visibles en Plaspy una vez que el reporte esté activo.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)  
- Soporte de transporte UDP o TCP en el puerto 8888; el dispositivo puede configurarse para usar UDP o TCP  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor compartido

## Requisitos habituales antes de la configuración

- Un dispositivo U02 encendido y accesible con batería cargada y cualquier ancla o infraestructura de gateway requerida activa.  
- Una SIM celular válida con plan de datos activo e información APN correcta del operador si el dispositivo usa GPRS para el reporte.  
- Capacidad para enviar mensajes SMS al dispositivo si elige la configuración vía SMS.  
- Acceso al método o software oficial de configuración Xexun y conocimiento de la contraseña por defecto del dispositivo (en el ejemplo público se usa 123456).  
- Una cuenta o despliegue en Plaspy donde pueda verificar el estado de reporte del dispositivo y ver los eventos entrantes.

## Cómo se conecta este rastreador a Plaspy

El U02 se integra con Plaspy a través del motor de anclas y posicionamiento, que reenvía las posiciones calculadas y los eventos de sensores al endpoint del servidor Plaspy. Configure el U02 o el gateway asociado para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma reciba ubicación y telemetría para visualización, alertas e informes.

- El ancla o gateway de posicionamiento reenvía las posiciones derivadas de UWB y la telemetría a Plaspy en d.plaspy.com puerto 8888.  
- Las cargas de sensor, como frecuencia cardíaca y movimiento, se envían al mismo endpoint de Plaspy para monitoreo en vivo e histórico.  
- Los eventos de manipulación y emergencia del U02 se reportan a Plaspy como alertas inmediatas para respuesta operativa.  
- La mensajería bidireccional entre anclas y dispositivo soporta mensajes push de sistema; esos mensajes se enrutan al flujo de trabajo de Plaspy.  
- Plaspy consolida los eventos interiores del U02 con la telemetría GPS exterior para una vista operativa unificada.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración Xexun, o prepárese para enviar comandos SMS si usará esa vía.  
2. En la configuración del dispositivo o gateway, ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.  
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
4. Elija UDP o TCP si el dispositivo requiere selección de transporte. Plaspy soporta ambos y detectará el protocolo automáticamente.  
5. Aplique o guarde la configuración en el dispositivo o gateway y, si es necesario, reinícielo.  
6. Valide que el dispositivo reporte a Plaspy comprobando la conectividad del equipo y los eventos en vivo en la plataforma.  
7. Pruebe eventos de manipulación, emergencia y telemetría para asegurarse de que aparezcan correctamente en Plaspy.

## Ejemplos de comandos de configuración

La configuración pública del U02 incluye comandos SMS que establecen el APN, configuran el servidor Plaspy y habilitan el reporte GPRS. Los ejemplos a continuación usan la contraseña por defecto 123456 que aparece en la guía pública del fabricante. Envíe cada línea como un SMS al número del dispositivo en el orden indicado cuando el orden sea relevante.

- Restauración de fábrica opcional inicial (usar solo cuando sea necesario o para configuración inicial):
```
begin123456
```

- Establecer el APN del operador (reemplazar {{apn}} por el APN de su operador):
```
apn123456 {{apn}}
```

- Establecer el nombre de usuario del APN si su operador lo requiere (reemplazar {{apnu}} por el usuario APN):
```
apnuser123456 {{apnu}}
```

- Establecer la contraseña del APN si su operador la requiere (reemplazar {{apnp}} por la contraseña APN):
```
apnpasswd123456 {{apnp}}
```

- Configurar el servidor GPRS para reportar a Plaspy. Esto usa la IP y el puerto de Plaspy tal como se especifica públicamente:
```
adminip123456 54.85.159.138 8888
```

- Habilitar el modo de reporte GPRS en el dispositivo:
```
gprsmode123456
```

- Establecer el intervalo de reporte a 60 segundos (comando de intervalo de ejemplo según el fabricante):
```
t060s***n123456
```

Notas sobre los marcadores y la contraseña:
- {{apn}} es un marcador para el APN de su operador móvil.  
- {{apnu}} y {{apnp}} son marcadores opcionales para el usuario y la contraseña del APN cuando el operador los requiere.  
- 123456 aparece en el ejemplo público como la contraseña por defecto del dispositivo. Si su equipo tiene una contraseña diferente, utilice esa en cada comando donde aparezca la contraseña.

## Notas de configuración

- Los comandos del fabricante y la sintaxis exacta de los SMS pueden variar según la versión de firmware y la revisión de hardware. Confirme siempre la sintaxis contra las notas de firmware de su dispositivo.  
- La configuración vía SMS está documentada públicamente y puede ser útil cuando el equipo está en una ubicación remota; confirme la entrega del SMS y la respuesta del dispositivo antes de depender únicamente de este método.  
- Elija UDP o TCP según sus preferencias de red y gateway; Plaspy soporta ambos y detectará automáticamente el protocolo cuando el dispositivo se conecte.  
- Plaspy usa el puerto de servidor 8888 para todos los dispositivos, por lo que debe establecer ese puerto de forma coherente en la configuración del dispositivo y del gateway.  
- Mantenga la documentación del fabricante a mano; pequeñas diferencias en el formato del comando, espacios o manejo de la contraseña pueden afectar el éxito de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el Xexun U02 con Plaspy ofrece a las organizaciones posicionamiento interior de alta resolución y telemetría de personal dentro de la misma plataforma operativa donde se gestiona la telemetría de vehículos y rastreadores GPS. Cuando el U02 está configurado para reportar a Plaspy en d.plaspy.com puerto 8888, los equipos obtienen una conciencia situacional unificada que combina ubicaciones interiores a nivel centimétrico, alertas de manipulación y emergencia y datos de sensores junto con la telemetría GPS exterior.

Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles de hardware del Xexun U02, verifique la información actual en el sitio del fabricante https://www.xexun.com/ ya que las especificaciones y procedimientos pueden cambiar con el tiempo.
