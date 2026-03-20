---
slug: /winrich/tk207_obd/configuration
id: tk207_obd-configuration
sidebar_label: Configuration
title: Winrich - TK207 OBD Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Winrich TK207 OBD con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - Configuración Winrich TK207 OBD
  - Instalación Winrich TK207 OBD
  - Configuración rastreador OBD Winrich
  - Configuración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Configuración GPS OBDII
  - Configuración seguimiento vehicular
  - Configuración plataforma GPS
  - Configuración rastreador gestión de flotas
  - Rastreador OBDII GPS Plaspy
---

# Winrich - TK207 OBD Configuración

Esta página describe el contexto público de configuración para usar el rastreador Winrich TK207 OBD con Plaspy. Reúne los pasos de configuración y ejemplos de comandos SMS disponibles públicamente que se usan para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y datos OBD a la plataforma.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK207 OBD soporta configuración por SMS y GPRS; los comandos de ejemplo que se muestran a continuación reflejan los comandos SMS públicos comunes para este modelo.

## Resumen de configuración

El objetivo de la configuración es preparar el TK207 OBD para comunicarse de forma confiable con Plaspy, de modo que el dispositivo aparezca en la plataforma y reporte ubicación y parámetros OBD. La configuración típica incluye parámetros de red, el endpoint y puerto del servidor Plaspy, y los intervalos de reporte, y luego se valida la conectividad.

- Configure el APN y el servidor GPRS del dispositivo para que el rastreador envíe datos a Plaspy mediante la red celular.
- Apunte el rastreador al endpoint y puerto compartido de Plaspy para habilitar la visibilidad en la plataforma.
- Defina un intervalo de subida adecuado para equilibrar la necesidad de rastreo en tiempo real y el uso de datos.
- Use los comandos SMS del fabricante o la herramienta de configuración para aplicar los ajustes y confirmar el estado.
- Valide el reporte en Plaspy después de la configuración para confirmar que el dispositivo es visible y está enviando los datos esperados.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el TK207 OBD:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP; elija el transporte requerido por el equipo o según su preferencia
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en la plataforma

Use cualquiera de las dos opciones —el dominio o la IP mostrada— al ingresar los datos del servidor en el dispositivo o mediante configuración por SMS.

## Requisitos habituales antes de la instalación

- Vehículo con puerto OBDII accesible para la instalación plug and play del TK207 OBD
- SIM activa con datos GPRS habilitados y capacidad de enviar y recibir SMS para la configuración
- Configuración correcta del APN del operador de la SIM (APN, usuario y contraseña si son necesarios)
- Acceso a la lista de comandos SMS del fabricante o la herramienta de configuración para el TK207 OBD
- Fuente de alimentación estable del vehículo y conexión OBDII correctamente asentada
- Tiempo disponible para verificar el reporte del dispositivo en Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK207 OBD usa el enlace GPRS celular para enviar ubicación, estado e información OBD a Plaspy. El dispositivo se configura para reportar al endpoint y puerto compartido que usa Plaspy, y la plataforma identificará automáticamente el protocolo del equipo.

- El rastreador envía posición y datos del dispositivo por GPRS a d.plaspy.com o 54.85.159.138
- Los datos se envían al puerto 8888 utilizando el transporte seleccionado (UDP o TCP)
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes
- Las subidas periódicas de ubicación, las alarmas y los reportes de parámetros OBD quedan disponibles en la plataforma Plaspy
- La validación del reporte confirma que el dispositivo se comunica con Plaspy y puede ser monitoreado

## Flujo de configuración común

1. Acceda al método de configuración oficial del fabricante, como comandos SMS o la herramienta del proveedor.
2. Ingrese el servidor Plaspy por nombre d.plaspy.com o por IP 54.85.159.138 en la configuración de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 como puerto de destino para las subidas GPRS.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para las subidas al servidor.
5. Configure el APN del dispositivo y las credenciales APN que requiera el operador de la SIM.
6. Aplique o guarde la configuración y reinicie el rastreador si el equipo lo requiere.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con las actualizaciones esperadas.

Si utiliza configuración mediante SMS, envíe los comandos del fabricante en el orden recomendado para la configuración inicial y la verificación.

## Comandos de configuración de ejemplo

El TK207 OBD admite configuración por comandos SMS. Los siguientes comandos públicos se muestran en la secuencia documentada. Conserve los marcadores de posición al aplicarlos.

1. Reinicio de fábrica (opcional en la configuración inicial)
```
940#
```

2. Establecer zona horaria a UTC+0
```
801#W0#
```

3. Configurar el APN del operador (reemplace los marcadores según sea necesario)
```
802#{{apn}}#{{apnu}}#{{apnp}}#
```
- {{apn}} es la cadena APN del operador de la SIM
- {{apnu}} es el usuario APN si se requiere (dejar vacío si no se usa)
- {{apnp}} es la contraseña APN si se requiere (dejar vacío si no se usa)

4. Establecer el servidor GPRS a Plaspy por IP y puerto
```
803#54.85.159.138#8888#
```
(Puede usar alternativamente d.plaspy.com en la interfaz del dispositivo si el equipo acepta nombres de dominio.)

5. Definir el intervalo de subida/actualización a 60 segundos
```
730#60#
```

6. Consultar configuración actual
```
886#
```

7. Consultar estado
```
902#
```

Siga los mensajes de respuesta del dispositivo para confirmar que cada comando se ejecutó correctamente. Si el formato de comandos difiere en su firmware, consulte la documentación del fabricante.

## Notas de configuración

- Las versiones de firmware y revisiones de hardware pueden cambiar los formatos de comando o los parámetros admitidos; confirme siempre la sintaxis SMS exacta para la revisión de su equipo.
- El TK207 OBD puede configurarse vía SMS como se muestra arriba; algunos instaladores prefieren usar una herramienta del fabricante según disponibilidad.
- Elija UDP o TCP según las capacidades del dispositivo; Plaspy acepta ambos y detectará automáticamente el comportamiento del protocolo.
- El servidor Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración en flotas mixtas.
- Verifique que las credenciales APN sean correctas antes de configurar el servidor GPRS para que el dispositivo pueda establecer la conexión de datos.

## Por qué usar Plaspy con esta configuración

Configurar el Winrich TK207 OBD para reportar a Plaspy ofrece visibilidad consistente de la ubicación del vehículo y de los parámetros OBD hacia un único endpoint de servidor compartido. Para gerentes de flota y propietarios de vehículos, esta configuración centraliza el rastreo, la supervisión de eventos y la gestión operativa sin necesidad de personalizar el servidor por dispositivo.

Para obtener más información sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información de configuración más reciente en el sitio oficial de Winrich http://www.winrichgroup.com/en/ antes de aplicar configuraciones críticas.
