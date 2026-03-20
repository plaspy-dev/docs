---
slug: /eelink/tk419/configuration
id: tk419-configuration
sidebar_label: Configuration
title: EElink - TK419 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el rastreador EElink TK419 con servidores y ajustes compartidos de Plaspy
keywords:
  - Configuración EElink TK419
  - Instalación EElink TK419
  - Configuración servidor TK419
  - Configuración TK419 Plaspy
  - Configuración rastreador EElink
  - Configuración rastreo vehículos Plaspy
  - Configuración servidor rastreador GPS
  - Rastreo flota TK419
  - Integración dispositivo Plaspy
  - Comandos SMS TK419
---

# EElink - TK419 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS EElink TK419 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica el flujo típico de configuración del dispositivo y proporciona los comandos SMS públicos del TK419 que se emplean para apuntar el dispositivo a Plaspy. El TK419 es un rastreador 4G compacto diseñado para flotas de vehículos y seguridad de activos, y es compatible con Plaspy para ubicación en tiempo real, alarmas y telemetría.

Plaspy utiliza un endpoint de ingreso compartido y detecta automáticamente los protocolos de los rastreadores entre los dispositivos soportados, aunque los pasos exactos en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK419 admite configuración remota por SMS y mediante herramientas de plataforma; esta página incluye los comandos SMS publicados en la documentación del dispositivo y describe cómo aplicarlos para registrar el rastreador en Plaspy.

## Resumen de la configuración

El objetivo al configurar un TK419 para Plaspy es habilitar la entrega continua y confiable de posiciones GNSS y telemetría al endpoint de ingestión de Plaspy para que el dispositivo aparezca y se actualice correctamente en la plataforma. La configuración normalmente implica ajustar el APN de datos móviles, especificar el servidor de Plaspy, elegir el modo de transporte si es necesario y validar que el rastreador reporte a la plataforma.

- Configure el APN del dispositivo para que el rastreador pueda usar datos móviles y alcanzar Plaspy.
- Apunte el dispositivo al endpoint del servidor de Plaspy y al puerto común para que los mensajes se enruten correctamente.
- Seleccione UDP o TCP como transporte cuando el dispositivo requiera elección explícita.
- Defina la frecuencia de reporte y las alarmas para que el dispositivo envíe actualizaciones en el intervalo deseado.
- Valide la configuración usando el comando de verificación del dispositivo y confirme la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

Al configurar el TK419 para Plaspy, use los siguientes ajustes públicos del servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; elija el transporte si el dispositivo requiere selección explícita
- Plaspy detecta automáticamente el protocolo del rastreador para que todos los dispositivos puedan usar el mismo puerto

Plaspy utiliza el mismo puerto en los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo esté correctamente apuntado al endpoint del servidor.

## Requisitos habituales antes de la configuración

- Un TK419 alimentado e instalado con acceso a su interfaz de SMS o configuración
- Una SIM celular activa con datos y las credenciales APN correctas de su operador
- Información básica del dispositivo como el IMEI para poder identificar el rastreador en Plaspy una vez que reporte
- Acceso al método oficial de configuración del fabricante o al software y herramientas del proveedor que utilice
- Acceso físico al dispositivo para la configuración inicial o la capacidad de enviar comandos SMS a su SIM
- Paciencia para verificar diferencias de firmware si encuentra comportamientos inesperados

## Cómo se conecta este rastreador a Plaspy

El TK419 transmite posiciones GNSS y telemetría del dispositivo a través de redes celulares al endpoint de ingestión de Plaspy. Al configurar el rastreador para que use el dominio o la IP del servidor Plaspy y el puerto compartido, el dispositivo entregará sus mensajes a Plaspy, donde la plataforma los mapeará en ubicación en vivo, alertas e informes.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP equivalente 54.85.159.138 en el puerto 8888
- Plaspy recibe los mensajes del dispositivo por UDP o TCP según el transporte elegido en el dispositivo
- Plaspy detecta automáticamente el protocolo empleado por el rastreador para usar el mismo puerto de ingestión
- La ubicación, las alarmas y la telemetría de IO enviadas por el rastreador se vuelven visibles y accionables en Plaspy
- Los intervalos de reporte regulares y las condiciones de alarma impulsan la visibilidad, las alertas y los registros históricos en la plataforma

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de EElink para el TK419, típicamente comandos SMS o las herramientas de configuración de EElink proporcionadas por el fabricante o el vendedor.
2. Configure el APN del dispositivo usando el formato de comando recomendado por el fabricante para que el rastreador pueda usar datos móviles.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Si el rastreador requiere selección de transporte, elija UDP o TCP según las necesidades de su instalación.
5. Configure el intervalo de reporte y alarmas como el valor TIMER que controla las actualizaciones periódicas.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o el firmware requieren un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación y confirme que el dispositivo aparece y se actualiza en Plaspy.

## Comandos de configuración de ejemplo

El TK419 admite configuración por SMS. A continuación se muestran los comandos SMS públicos tal como fueron publicados en la documentación del dispositivo. Preserve el orden cuando aplique los comandos durante la configuración inicial. El etiquetado indica la intención común; no modifique los comandos a menos que comprenda el comportamiento del dispositivo.

1. Restauración de fábrica opcional (use solo cuando necesite restaurar valores por defecto)
```text
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

3. Establecer el APN del operador
- Reemplace [apn] por el APN de su operador.
- Si su operador requiere usuario o contraseña, incluya [apnu] y [apnp] respectivamente como se muestra en el marcador.
```text
APN,[apn]# 
```
o con usuario y contraseña opcionales
```text
APN,[apn],[apnu],[apnp]#
```

4. Establecer el servidor GPRS a Plaspy usando el dominio (preferido para resolución DNS)
```text
SERVER,1,d.plaspy.com,8888#
```
o establecer el servidor GPRS a Plaspy usando la IP
```text
SERVER,0,54.85.159.138,8888#
```

5. Establecer el intervalo de actualización periódico a cada 60 segundos
```text
TIMER,60#
```

6. Comprobar los parámetros actuales
```text
PARAM#
```

Nota sobre los marcadores
- [apn] es el APN del operador móvil requerido para acceso de datos.
- [apnu] es un nombre de usuario APN opcional.
- [apnp] es una contraseña APN opcional.
Mantenga estos marcadores y sustituya sus valores del operador al enviar los comandos SMS.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles o la sintaxis; verifique el conjunto de comandos según el firmware de su dispositivo.
- El TK419 admite configuración por SMS como se muestra; también puede usar herramientas del fabricante o servicios de aprovisionamiento del proveedor cuando estén disponibles.
- Plaspy acepta conexiones en el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del dispositivo una vez que se configuren el servidor y el puerto.
- Elija UDP o TCP según su entorno y el soporte del dispositivo; algunas instalaciones prefieren UDP por menor sobrecarga mientras que otras requieren TCP para entrega confiable.
- Use PARAM# para verificar los ajustes después de aplicar los comandos y antes de concluir la instalación.

## Por qué usar Plaspy con esta configuración

Apuntar un TK419 a Plaspy con los ajustes de servidor compartidos ofrece a los administradores de flota un camino sencillo hacia la ubicación en tiempo real, las alarmas y la telemetría en una única plataforma. Plaspy convierte los mensajes entrantes del rastreador en actualizaciones de mapa, alertas de eventos e historial que apoyan el monitoreo operativo, la respuesta ante robos y los reportes de cumplimiento.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para las instrucciones específicas más recientes del dispositivo, el comportamiento del firmware y la guía del fabricante verifique los detalles en el sitio de EElink https://www.eelink.com.cn/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
