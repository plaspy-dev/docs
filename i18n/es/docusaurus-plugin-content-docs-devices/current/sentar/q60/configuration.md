---
slug: /sentar/q60/configuration
id: q60-configuration
sidebar_label: Configuration
title: Sentar - Q60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker Sentar Q60 con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración Sentar Q60
  - Instalación Sentar Q60
  - Sentar Q60 Plaspy
  - Configuración servidor Q60
  - Configuración tracker GPS Q60
  - Configuración tracker GPS Sentar
  - Configuración software seguimiento Q60
  - Seguimiento vehicular Q60
  - Configuración tracker Plaspy
  - Configuración servidor Plaspy
---

# Sentar - Q60 Configuración

Esta página documenta el contexto público de configuración para usar el tracker GPS Sentar Q60 con Plaspy. Reúne los pasos conocidos y comandos SMS disponibles públicamente, y explica cómo apuntar un dispositivo Q60 a Plaspy para que el tracker reporte ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta el protocolo del tracker de forma automática, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Q60 admite configuración por SMS como se muestra en los comandos públicos a continuación; siga estos pasos junto con la documentación oficial de Sentar para obtener los procedimientos más precisos y actuales del dispositivo.

## Resumen de la configuración

Esta sección explica el propósito del proceso de configuración y lo que logrará al preparar un Sentar Q60 para Plaspy.

- Configurar el Q60 para enviar datos de ubicación por GPRS a Plaspy introduciendo la información del servidor de la plataforma y el puerto.
- Definir los parámetros APN y del operador para que el dispositivo pueda registrarse en la red móvil y establecer conexiones de datos.
- Opcionalmente realizar un restablecimiento de fábrica inicial o ajustar la zona horaria y fijar un intervalo de reporte/subida para actualizaciones periódicas de posición.
- Validar la conectividad y confirmar que el dispositivo sea visible en Plaspy luego de aplicar los ajustes.
- Usar comandos SMS en dispositivos que soporten dicha configuración para realizar cada paso sin herramientas propietarias de PC.

## Ajustes del servidor de Plaspy

Utilice estos ajustes públicos de Plaspy exactamente como se indican al configurar el Q60. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del tracker.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Detección automática de protocolo en Plaspy

## Requisitos típicos antes de la configuración

- Un tracker Sentar Q60 alimentado y accesible con batería suficiente o alimentación externa.
- Una tarjeta SIM con un plan de datos activo y capacidad de SMS insertada en el dispositivo y capaz de registrarse en la red móvil local.
- La contraseña por defecto del dispositivo (los comandos públicos abajo usan 123456) o la contraseña configurada en el dispositivo.
- Conocimiento del APN del operador móvil y, opcionalmente, del usuario y contraseña del APN para el registro de datos.
- Acceso al método de comandos SMS de Sentar o a la herramienta o manual de configuración oficial de Sentar.
- Cobertura de red en la ubicación de instalación del dispositivo para permitir conexiones GPRS al servidor de Plaspy.

## Cómo se conecta este tracker a Plaspy

El Sentar Q60 se configura para reportar posición y eventos del dispositivo a Plaspy enviando datos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tiene acceso a la red y los ajustes de servidor correctos, Plaspy aceptará conexiones entrantes y manejará automáticamente el protocolo del tracker.

- El Q60 utiliza el APN configurado para establecer conectividad de datos GPRS.
- El dispositivo envía paquetes de seguimiento a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- Puede seleccionar UDP o TCP en el dispositivo si requiere selección de transporte; Plaspy acepta ambos y detecta el protocolo automáticamente.
- La frecuencia de reporte se controla mediante el ajuste de intervalo de subida en el Q60 y determina con qué frecuencia el dispositivo envía datos a Plaspy.
- Plaspy recibe los datos del dispositivo y hace que el tracker sea visible en la plataforma para monitoreo y uso operativo.

## Flujo de trabajo común de configuración

Siga estos pasos prácticos para configurar un Sentar Q60 y que se comunique con Plaspy.

1. Acceda al método de configuración oficial de Sentar para el Q60, normalmente comandos SMS o una herramienta/manual proporcionado por el fabricante.
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888; Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP en el dispositivo si es necesario seleccionar el modo de transporte.
5. Configure los detalles del APN del dispositivo (APN, usuario APN, contraseña APN) y cualquier identificador del operador como MCC/MNC si se requiere.
6. Aplique o guarde la configuración y reinicie el dispositivo si este necesita un reboot para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad en la plataforma o utilizando los comandos SMS de verificación del dispositivo.

## Comandos de configuración de ejemplo

El Sentar Q60 puede configurarse mediante comandos SMS. Los siguientes comandos públicos se proporcionan en la muestra de configuración del fabricante. Los comandos asumen que la contraseña del dispositivo es 123456 (el valor por defecto en la muestra pública). Use el formato de comando exacto requerido por su firmware y conserve los marcadores de posición [apn], [apnu] y [apnp] al reemplazar los valores del APN.

- Restablecer a valores de fábrica (paso inicial opcional; úselo solo si necesita restaurar los valores de fábrica)
```text
pw,123456,factory#
```

- Ajustar la zona horaria a UTC-0
```text
pw,123456,lz,0,0#
```

- Comprobar MCC y MNC (identificadores del operador)
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde xxx es MCC y yy es MNC
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explicación: [apn] es el APN del operador, [apnu] es el usuario del APN si es necesario, y [apnp] es la contraseña del APN si corresponde. Reemplace xxxyy por la concatenación del MCC y MNC si su dispositivo lo requiere.

- Establecer servidor GPRS a Plaspy por IP y puerto
```text
pw,123456.ip,54.85.159.138,8888#
```
Nota: El ejemplo público anterior se muestra tal como lo proporciona el fabricante. Si su dispositivo espera un separador o sintaxis de comando diferente (por ejemplo una coma entre la contraseña y el token ip), siga la sintaxis exacta requerida por el firmware o la documentación del proveedor.

- Establecer intervalo de subida a 300 segundos (ejemplo)
```text
pw123456,upload,300#
```

- Verificar ajustes actuales
```text
pw,123456,ts#
```

Use el comando de verificación para confirmar que el dispositivo aplicó los ajustes e inspeccionar la configuración actual después de enviar los comandos.

## Notas de configuración

- La sintaxis y los separadores de los comandos SMS pueden variar según la versión de firmware; siempre verifique con el manual del Sentar Q60 el formato exacto de los comandos.
- Los comandos de ejemplo arriba usan la contraseña por defecto 123456; cambie la contraseña después de la configuración inicial si su política de seguridad lo requiere.
- Plaspy acepta tanto UDP como TCP en el puerto 8888; elija el modo de transporte soportado por su dispositivo y su red. Plaspy detectará el protocolo usado automáticamente.
- La configuración por SMS está soportada por los comandos públicos arriba; algunos instaladores prefieren las herramientas del proveedor o software de PC: utilice el método que corresponda al firmware de su dispositivo.
- Reemplace los marcadores de APN ([apn], [apnu], [apnp]) con los valores proporcionados por su operador móvil. La comprobación e ingreso de MCC/MNC puede ser necesaria en ciertas regiones.

## Por qué usar Plaspy con esta configuración

Configurar un Sentar Q60 para enviar datos a Plaspy ofrece a las organizaciones una forma sencilla de incorporar un tracker confiable a una plataforma moderna de monitoreo de flotas y activos. Usar el endpoint compartido de Plaspy y la detección automática de protocolo simplifica la integración, ya que todos los dispositivos soportados usan el mismo puerto y Plaspy se encarga de las diferencias de protocolo en la plataforma.

Para obtener más información sobre Plaspy y las configuraciones de dispositivos soportados visite https://www.plaspy.com. Para métodos de configuración específicos del Sentar Q60, comportamiento de firmware e instrucciones del fabricante, verifique los detalles en el sitio oficial de Sentar http://www.sentarsmart.com/ ya que el firmware y la sintaxis exacta de los comandos pueden cambiar con el tiempo.
