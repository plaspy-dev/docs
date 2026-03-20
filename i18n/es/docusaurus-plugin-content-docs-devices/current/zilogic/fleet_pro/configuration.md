---
slug: /zilogic/fleet_pro/configuration
id: fleet_pro-configuration
sidebar_label: Configuration
title: Zilogic - Fleet Pro Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Zilogic Fleet Pro y su conexión a Plaspy con comandos y ajustes de servidor
keywords:
  - Configuración Zilogic Fleet Pro
  - Instalación Zilogic Fleet Pro
  - Configuración del servidor Fleet Pro
  - Rastreador GPS Zilogic Plaspy
  - Configuración GPRS SMS Fleet Pro
  - Guía de configuración de rastreadores GPS
  - Configuración de plataforma de seguimiento de vehículos
  - Configuración de telemetría Fleet Pro
  - Ajustes de servidor Plaspy
  - Detección del protocolo del rastreador
---

# Zilogic - Fleet Pro: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Zilogic Fleet Pro con Plaspy. Resume los ajustes públicos del servidor Plaspy, describe el flujo práctico de configuración y recopila los comandos SMS de uso común que permiten apuntar un dispositivo Fleet Pro hacia Plaspy.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, así que considere los comandos y el flujo descritos aquí como una guía pública práctica y confirme los detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo es dejar un dispositivo Fleet Pro listo para que informe de ubicación y estado a Plaspy de forma fiable. Los pasos siguientes cubren acciones habituales como aplicar los ajustes del servidor de Plaspy, habilitar el reporte por GPRS y validar la conectividad entre el dispositivo y la plataforma.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los datos fluyan hacia la plataforma.
- Configurar GPRS y el APN del operador para que el dispositivo pueda acceder a Plaspy mediante datos móviles.
- Seleccionar el transporte y el puerto que usa Plaspy y guardar la configuración en el rastreador.
- Verificar el reporte del dispositivo con comandos de estado o consulta para que aparezca en Plaspy.
- Ajustar el intervalo de reporte para equilibrar visibilidad en tiempo real y consumo de datos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los detalles públicos del endpoint de Plaspy para usar al apuntar un dispositivo Fleet Pro a la plataforma. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente.

## Requisitos habituales antes de la configuración

- Un dispositivo Fleet Pro instalado y con alimentación, accesible para configuración.
- Una SIM móvil válida con datos habilitados y los detalles correctos del APN del operador.
- Un método para enviar comandos SMS o acceder a la herramienta de configuración del fabricante, según el firmware del equipo y el flujo de aprovisionamiento.
- Conocimientos básicos sobre los requisitos de intervalo de reporte que su flota necesita.
- Acceso al número de serie del dispositivo o identificador único que Plaspy pueda usar para registrar el equipo si su administrador lo requiere.

## Cómo se conecta este rastreador a Plaspy

Fleet Pro se configura para enviar sus datos de ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tiene entradas correctas de APN y servidor, abrirá una sesión GPRS y transmitirá paquetes de rastreo a Plaspy para visibilidad y monitoreo.

- El rastreador se apunta a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- El dispositivo puede usar UDP o TCP como transporte para enviar datos a Plaspy.
- Plaspy detecta automáticamente el protocolo del dispositivo, lo que facilita despliegues con múltiples proveedores.
- Actualizaciones periódicas y reportes por evento permiten a Plaspy mostrar ubicación y estado operativo.
- Verificar la conectividad GPRS y que los ajustes de servidor queden guardados asegura que el dispositivo aparezca y reporte en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del Zilogic Fleet Pro para su unidad, por ejemplo la interfaz de comandos SMS o la herramienta de configuración del proveedor, según corresponda al firmware del equipo.
2. Ingrese el endpoint del servidor Plaspy configurando d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
5. Configure el APN del operador y habilite datos GPRS para que el dispositivo pueda alcanzar el servidor Plaspy.
6. Aplique o guarde la configuración y, si es necesario, reinicie el equipo para que se apliquen los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy usando las consultas de estado del equipo o comprobando la actividad en la plataforma.

## Ejemplos de comandos de configuración

El Fleet Pro soporta configuración vía SMS. A continuación se muestran los comandos SMS públicos en el orden habitual para preparar un dispositivo para Plaspy. Envíe cada línea como un SMS independiente desde un número autorizado, a menos que su proceso de aprovisionamiento indique lo contrario.

- Ajustar la zona horaria del equipo (ejemplo establece UTC):
```
SET TZ +00:00
```

- Establecer el APN del operador usando marcadores de posición. Reemplace los marcadores con los valores de su operador:
```
SET APN [apn],[apnu],[apnp]
```
Explicación de los marcadores:
- [apn] = nombre del APN proporcionado por su operador móvil
- [apnu] = nombre de usuario del APN si el operador lo requiere (dejar en blanco si no aplica)
- [apnp] = contraseña del APN si el operador la requiere (dejar en blanco si no aplica)

- Establecer el servidor GPRS al endpoint de Plaspy usando la IP pública y el puerto:
```
SET SERVER 54.85.159.138,8888
```
Puede usar d.plaspy.com en lugar de la IP si el equipo acepta nombres de dominio.

- Habilitar modo GPRS:
```
SET GPRS 1
```

- Ajustar el intervalo de reporte. El ejemplo configura actualizaciones periódicas; ajuste según sus necesidades:
```
SET PERIOD 60,60
```
(Los valores indican la configuración de intervalo según el firmware del dispositivo; confirme la semántica exacta en la documentación del fabricante.)

- Guardar la configuración para que las opciones persistan:
```
SAVE
```

Comandos de verificación para revisar la configuración actual:
```
GET APN
```
```
GET GPRS
```
```
GET SERVER
```
```
STATUS
```

Estos comandos son los públicos provistos por el fabricante y se usan comúnmente para preparar dispositivos Fleet Pro para Plaspy. Mantenga el orden anterior para una secuencia típica de configuración.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funcionalidades disponibles; confirme los comandos con la documentación del firmware de su dispositivo.
- Fleet Pro documenta métodos de configuración por SMS y por GPRS; use SMS cuando el equipo esté remoto o no se disponga de una herramienta de configuración.
- Elija TCP o UDP según la fiabilidad de la red y sus necesidades operativas; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 con el puerto 8888; Plaspy mantiene el mismo puerto para simplificar la configuración entre múltiples dispositivos.
- Tenga listos los marcadores [apn], [apnu] y [apnp] antes de enviar comandos para poder ingresar las credenciales del operador con precisión.

## Por qué usar Plaspy con esta configuración

Configurar un Zilogic Fleet Pro para que reporte a Plaspy brinda a los administradores de flota visibilidad centralizada de la ubicación de los vehículos y de su estado operativo. Con el intervalo de reporte configurable del Fleet Pro, el acelerómetro y la telemetría OBD II opcional, emparejar el rastreador con Plaspy ayuda a las organizaciones a monitorear el comportamiento de manejo, responder a eventos y mantener control sobre sus activos vehiculares.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para obtener los pasos de configuración específicos más recientes, notas de firmware y detalles técnicos consulte la documentación oficial de Zilogic en https://zilogic.com/ ya que las especificaciones del fabricante y los procedimientos recomendados pueden cambiar con el tiempo.
