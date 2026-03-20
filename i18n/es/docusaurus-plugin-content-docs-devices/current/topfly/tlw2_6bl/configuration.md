---
slug: /topfly/tlw2_6bl/configuration
id: tlw2_6bl-configuration
sidebar_label: Configuration
title: TopFly - TLW2-6BL Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el TopFly TLW2-6BL para Plaspy con ajustes de servidor, comandos SMS y pasos prácticos para un rastreo de flotas fiable
keywords:
  - Configuración TopFly TLW2-6BL
  - Instalación TopFly TLW2-6BL
  - TopFly TLW2-6BL Plaspy
  - Configuración servidor TLW2-6BL
  - Comandos SMS TLW2-6BL
  - Configuración rastreador GPS TLW2-6BL
  - Configuración rastreador Plaspy
  - Configuración rastreador de vehículo
  - Configuración rastreo de flotas
  - Integración plataforma GPS
---

# TopFly - TLW2-6BL Configuración

Esta página describe el contexto público de configuración para usar el rastreador TopFly TLW2-6BL con Plaspy. Reúne los ajustes de servidor que debe usar en Plaspy, los prerrequisitos habituales y los comandos SMS de configuración públicos del TLW2-6BL para que pueda preparar el dispositivo y hacerlo reportar a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TLW2-6BL es un rastreador vehicular 4G LTE de cableado fijo diseñado para gestión profesional de flotas y es compatible con Plaspy desde fábrica; esta página explica los pasos públicos y prácticos para apuntar el dispositivo a Plaspy y validar la conectividad.

## Resumen de la configuración

El objetivo de la configuración es dejar al TLW2-6BL listo para reportar posición GNSS y telemetría a Plaspy de forma fiable y en un formato que la plataforma ingiera automáticamente. Cuando esté disponible, utilice el SMS del fabricante o la herramienta de aprovisionamiento para aplicar los ajustes de servidor y APN, y luego verifique que el dispositivo aparece en Plaspy.

- Establecer el endpoint del servidor y el transporte para que el rastreador envíe informes a Plaspy
- Configurar APN y parámetros GPRS para asegurar conectividad de datos móviles
- Aplicar intervalos de reporte y comportamiento de almacenamiento en búfer según las necesidades operativas
- Validar en la plataforma Plaspy que posición y telemetría llegan correctamente
- Usar los comandos SMS proporcionados como método simple y soportado por el fabricante para empujar la configuración cuando sea posible

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP; configure el dispositivo en cualquiera de los dos si lo requiere
- Plaspy detecta automáticamente el protocolo del rastreador para reconocer cargas telemáticas estándar

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y la plataforma detectará el protocolo automáticamente cuando el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Un TLW2-6BL alimentado e instalado o conectado a una fuente de banco para aceptar configuración
- Una SIM activa con datos habilitados y las credenciales APN necesarias del operador móvil
- Acceso al método de configuración del fabricante, como comandos SMS o una herramienta oficial de aprovisionamiento
- Un teléfono con capacidad SMS o una interfaz de aprovisionamiento si va a usar la configuración por SMS como se muestra a continuación
- Conocimiento de la contraseña del dispositivo cuando las órdenes lo requieran; los ejemplos públicos usan la contraseña predeterminada 0000
- Acceso a las credenciales de su cuenta Plaspy para verificar que el dispositivo reporta a la plataforma tras la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TLW2-6BL envía posiciones GNSS y telemetría al endpoint y puerto compartido de Plaspy. Plaspy ingiere los datos del dispositivo, reconoce el protocolo automáticamente y muestra ubicación, eventos y subidas en búfer en el panel de Plaspy.

- Los informes del dispositivo se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según el firmware del dispositivo y la preferencia
- Los informes incluyen posición y telemetría que Plaspy mapea a un registro de dispositivo
- Los puntos almacenados en búfer en el dispositivo se suben a Plaspy cuando vuelve la conectividad
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración TopFly para el TLW2-6BL; puede ser el conjunto de comandos SMS del fabricante o una herramienta de aprovisionamiento proporcionada por TopFly.
2. Configure el APN del dispositivo usando las credenciales del operador de su SIM para que el rastreador pueda abrir una sesión de datos.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 según lo indicado.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo le pide seleccionar un transporte.
5. Aplique o guarde la configuración en el dispositivo y cambie la contraseña predeterminada si su política de seguridad lo exige.
6. Reinicie el dispositivo si las instrucciones del fabricante especifican un reinicio después de la configuración.
7. Valide que el dispositivo reporta a Plaspy comprobando los mensajes entrantes y la ubicación en su cuenta Plaspy.

Si utiliza los comandos SMS que se muestran más abajo, envíelos en el orden indicado y confirme que cada comando es aceptado por el dispositivo antes de continuar.

## Ejemplos de comandos de configuración

El fabricante del TLW2-6BL ofrece un conjunto de comandos SMS para configuración. Los siguientes comandos públicos son ejemplos que pueden enviarse como mensajes SMS. La configuración de ejemplo usa la contraseña predeterminada del dispositivo 0000. Mantenga [apn], [apnu] y [apnp] como marcadores de posición para el APN, el usuario y la contraseña de su red móvil.

- Establecer la zona horaria a UTC 0
```text
GMT,0000,0#
```

- Establecer el APN del operador (reemplace los marcadores por los valores de su operador)
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: [apn] es el APN de su operador, [apnu] es el nombre de usuario del APN si se requiere, y [apnp] es la contraseña del APN si se requiere. Si el operador no pide usuario o contraseña, deje esos campos en blanco según la sintaxis SMS del fabricante.

- Configurar el servidor GPRS en Plaspy usando la IP pública y el puerto
```text
IP,0000,54.85.159.138 8888#
```
Nota: El ejemplo del fabricante usa el formato de IP. Si su dispositivo permite configurar un nombre de host, también puede usar d.plaspy.com mediante el método oficial de aprovisionamiento cuando el dispositivo lo soporte.

- Establecer intervalo de reporte a 60 segundos
```text
TIMER,0000,60:60:0:0#
```
Explicación: Este ejemplo fija un intervalo de actualización periódico; ajuste los valores según sus necesidades operativas y el manual del dispositivo.

Estos comandos están disponibles en la documentación pública del fabricante y deben enviarse desde un teléfono con capacidad SMS o un sistema de aprovisionamiento al número de la SIM del dispositivo. La contraseña predeterminada 0000 se muestra en los comandos de ejemplo y debe cambiarse una vez confirme la configuración si su despliegue requiere una contraseña no predeterminada.

## Notas de configuración

- Las revisiones de firmware del fabricante y las variantes regionales pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique siempre la documentación TopFly correspondiente a su revisión de dispositivo.
- La configuración por SMS es un método común y práctico para la configuración inicial, especialmente en dispositivos cableados en campo, pero puede existir una herramienta de aprovisionamiento para despliegues masivos.
- Elija UDP o TCP según sus requisitos de red y fiabilidad; ambos transportes son compatibles y Plaspy aceptará cualquiera en el puerto 8888.
- Reemplace los marcadores de APN por los valores específicos del operador; una configuración APN incorrecta impedirá sesiones GPRS y el envío de informes.
- Cambie la contraseña predeterminada del dispositivo después de la configuración inicial si las políticas de seguridad lo requieren.

## Por qué usar Plaspy con esta configuración

Usar el TLW2-6BL con Plaspy ofrece una manera directa de integrar seguimiento GNSS de alta frecuencia y telemetría vehicular en una sola plataforma. La capacidad de almacenamiento en búfer del dispositivo y los intervalos de reporte configurables lo hacen adecuado para flotas que requieren reconstrucción continua de rutas, controles antirrobo e integración de sensores para visibilidad en cadena de frío.

Para saber más sobre Plaspy y cómo la plataforma gestiona la ingestión de dispositivos y el rastreo, visite https://www.plaspy.com. Para los detalles más actuales sobre la configuración específica del dispositivo, comportamiento de firmware y la sintaxis exacta de comandos SMS, verifique la información en el sitio del fabricante https://www.topflytech.com/ ya que las especificaciones y comandos pueden cambiar con revisiones de firmware y hardware.
