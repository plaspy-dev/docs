---
slug: /condor/cs_146/configuration
id: cs_146-configuration
sidebar_label: Configuration
title: Condor - CS-146 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Condor CS-146 para usar con Plaspy incluyendo ajustes de servidor comandos SMS y flujo de configuración
keywords:
  - Configuración Condor CS-146
  - Configuración CS-146
  - Configuración CS-146 Plaspy
  - Configuración de servidor CS-146
  - Configuración rastreador GPS Condor
  - Configuración rastreador Plaspy
  - Configuración rastreador de contenedores
  - Configuración SMS CS-146
  - Seguimiento de flotas Condor
  - Rastreador de seguridad para contenedores
---

# Condor - Configuración del CS-146

Esta página describe el contexto de configuración pública para usar el rastreador GPS Condor CS-146 con Plaspy. Reúne los pasos prácticos y los ajustes de servidor necesarios para apuntar un dispositivo CS-146 hacia Plaspy, de modo que el rastreador pueda enviar ubicaciones y actualizaciones de estado a su cuenta de Plaspy.

Plaspy utiliza un punto de conexión de servidor compartido y el mismo puerto para los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes. Los pasos de configuración del fabricante para el CS-146 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello, utilice esta guía junto con la documentación del dispositivo y los métodos de configuración SMS o por herramienta que provea Condor.

## Resumen de la configuración

El proceso de configuración prepara el CS-146 para comunicarse con la plataforma Plaspy, verifica la conectividad de red y permite al dispositivo reportar actualizaciones periódicas y por eventos al servidor de Plaspy.

- Configure los ajustes de servidor del dispositivo para que el rastreador reporte al punto de conexión y puerto de Plaspy.
- Proporcione el APN y los datos de red para que la transmisión GPRS o celular esté disponible y activa.
- Asigne un identificador y la zona horaria del dispositivo para que los reportes aparezcan correctamente en Plaspy.
- Valide la conectividad y confirme que el dispositivo está enviando mensajes a Plaspy.
- Use el mismo puerto que requiere Plaspy y deje que Plaspy detecte automáticamente el protocolo para su procesamiento.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on tracker requirements  
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto. Use el dominio d.plaspy.com o la IP 54.85.159.138 y configure el puerto 8888 en el dispositivo.

## Requisitos típicos antes de la configuración

- Un dispositivo CS-146 con alimentación y capacidad para recibir comandos SMS de configuración o acceso a la herramienta de configuración del fabricante.  
- Una SIM activa con plan de datos si va a usar transmisión celular GPRS, y la información APN correcta del operador.  
- El IMEI del dispositivo para crear identificadores y verificar el dispositivo durante la instalación.  
- Acceso al método de configuración de Condor o a la sintaxis de comandos SMS según lo provea el fabricante.  
- Conocimientos básicos sobre si el dispositivo debe usar transporte UDP o TCP para poder seleccionarlo si es necesario.  
- Documentación del fabricante y notas del instalador para la versión de firmware o revisión de hardware específica que esté configurando.

## Cómo se conecta este rastreador a Plaspy

El CS-146 se configura para enviar mensajes de ubicación y estado al punto de conexión y puerto compartidos de Plaspy para que esos mensajes estén disponibles en Plaspy y se procesen en tiempo real.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- Los mensajes pueden enviarse por UDP o TCP según el transporte seleccionado; Plaspy detecta el protocolo automáticamente.  
- Mensajes impulsados por eventos, como apertura remota o alarmas, se reenvían a Plaspy para alertas y flujos de trabajo.  
- Plaspy procesa los mensajes entrantes y pone la telemetría del dispositivo a disposición en la plataforma para visibilidad e informes.  
- Confirmar que el dispositivo aparece en Plaspy y que envía actualizaciones regulares completa la integración.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Condor o al software del fabricante, o prepárese para enviar comandos SMS conforme a las instrucciones del dispositivo.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo servidor o servidor GPRS.  
3. Configure el puerto en 8888. Plaspy usa el mismo puerto para todos los dispositivos.  
4. Seleccione el transporte UDP o TCP si el dispositivo requiere elegir uno.  
5. Proporcione el APN y las credenciales de red necesarias mediante el método de configuración del dispositivo.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante lo requiere.  
7. Valide que el dispositivo reporte a Plaspy comprobando los mensajes entrantes y el estado del dispositivo en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El CS-146 admite configuración por SMS. Los comandos que siguen son ejemplos públicos extraídos del contenido de configuración del dispositivo. La contraseña por defecto del dispositivo usada en estos ejemplos es 0000. Envíe cada comando como un SMS al dispositivo desde un número autorizado cuando utilice la configuración por SMS.

- Establecer el APN del operador. Los marcadores [apn], [apnu] y [apnp] se preservan y representan los valores de APN y, opcionalmente, usuario y contraseña del APN requeridos por su operador de SIM.

```
APN,0000,[apn]
```

Si su APN requiere usuario y contraseña inclúyalos como sigue.

```
APN,0000,[apn],[apnu],[apnp]
```

- Establecer un identificador de 5 dígitos (use los últimos 5 dígitos del IMEI). Reemplace XXXXX con los últimos 5 dígitos del IMEI del dispositivo.

```
ALIAS,0000,XXXXX#
```

Ejemplo si los últimos 5 dígitos del IMEI son 12345

```
ALIAS,0000,12345#
```

- Establecer la zona horaria a UTC 0

```
GMT,0000,-0#
```

- Configurar el servidor GPRS para reportar a Plaspy. Este comando define la IP del servidor, el puerto, el transporte y las banderas para el CS-146 según la configuración pública.

```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```

- Establecer el intervalo de actualización (el ejemplo muestra un formato usado por el dispositivo para fijar el intervalo de reporte)

```
INTERVALO,0000,M,6#
```

- Poner el modo GPRS o activar GPRS en el dispositivo

```
GPRS,0000,A#
```

- Consultar o solicitar la configuración actual del dispositivo

```
CONEXION,0000#
```

Notas sobre marcadores y formato
- 0000 es la contraseña por defecto del dispositivo que aparece en los comandos públicos. Si su dispositivo usa una contraseña distinta, sustitúyala en consecuencia.  
- [apn], [apnu] y [apnp] son marcadores para APN, usuario APN y contraseña APN. Reemplace con los valores de su operador de SIM.  
- Reemplace XXXXX en el comando ALIAS con los últimos cinco dígitos reales del IMEI del dispositivo.  
- Los comandos se listan en el orden provisto por la configuración pública y normalmente se envían por SMS. Siga las indicaciones de Condor sobre números autorizados y el formato de los SMS.

## Notas de configuración

- La configuración por SMS está incluida en el contenido público de configuración, así que asegúrese de que el dispositivo pueda recibir SMS desde el número desde el que vaya a configurar.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis o los comandos soportados. Confirme el formato exacto de los comandos con Condor para la versión de firmware que tenga.  
- Elija UDP o TCP según la preferencia del instalador o la compatibilidad; Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.  
- Todos los dispositivos en Plaspy usan el puerto 8888, por lo que debe usar ese puerto de forma consistente al configurar dispositivos para Plaspy.  
- Verifique cuidadosamente los ajustes APN con su operador móvil antes de iniciar la configuración GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el Condor CS-146 para reportar a Plaspy proporciona visibilidad centralizada de la ubicación de contenedores, eventos de acceso y el estado operativo. Esta combinación ayuda a los equipos de operaciones a rastrear envíos en tiempo real, recibir alertas por eventos de apertura y consolidar la telemetría del CS-146 en informes y flujos de trabajo para flotas mixtas.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para obtener los detalles de configuración específicos más recientes, notas de firmware y la referencia oficial de comandos, verifique la información en el sitio del fabricante https://condorskyseeker.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
