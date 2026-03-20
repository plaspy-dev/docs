---
slug: /sentar/d39/configuration
id: d39-configuration
sidebar_label: Configuration
title: Sentar - D39 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para el reloj Sentar D39 con ajustes de servidor Plaspy y comandos SMS para instalación y verificación
keywords:
  - Sentar D39 configuración
  - Sentar D39 instalación
  - Sentar D39 configuración de servidor
  - Sentar D39 Plaspy
  - rastreador GPS D39
  - configuración reloj inteligente D39
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración reloj GPS portátil
  - configuración reloj GPS infantil
---

# Sentar - Configuración del D39

Esta página detalla el contexto público de configuración para utilizar el reloj Sentar D39 con Plaspy. Resume los ajustes de servidor prácticos y los comandos SMS publicados por el fabricante que se usan comúnmente para apuntar el dispositivo al servicio Plaspy y verificar la conectividad. Utilice esta guía para comprender los pasos principales necesarios para registrar un D39 en Plaspy, respetando los comandos y marcadores tal como los publica el fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos de configuración del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. La documentación del D39 incluye comandos vía SMS y credenciales por defecto útiles para la provisión inicial; trate esos comandos como ejemplos publicados por el fabricante y confirme los detalles frente al firmware y la documentación del proveedor cuando sea posible.

## Resumen de configuración

El objetivo de la configuración es preparar el D39 para comunicarse de manera fiable con Plaspy y confirmar que el dispositivo está visible y reportando en la plataforma. Los pasos siguientes se enfocan en apuntar el dispositivo a Plaspy, validar la conectividad y habilitar las cargas periódicas para que el reloj aparezca en los paneles de Plaspy.

- Configure el D39 para usar los ajustes de servidor de Plaspy para que los reportes de ubicación y estado lleguen a la plataforma.
- Aplique los parámetros APN y GPRS para que el dispositivo pueda usar datos móviles en las cargas.
- Elija transporte UDP o TCP y establezca el puerto compartido de Plaspy para que las cargas coincidan con lo esperado por la plataforma.
- Valide el reporte del dispositivo y revise el estado con un comando de verificación o comprobando la visibilidad en Plaspy.
- Opcionalmente, realice un restablecimiento de fábrica o ajuste de zona horaria durante la provisión inicial si fuera necesario.

## Ajustes de servidor de Plaspy

Use los siguientes valores de servidor al configurar el D39 para Plaspy. Estos son los valores de conexión Plaspy publicados y utilizados para todos los dispositivos compatibles.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes soportados: UDP o TCP pueden configurarse en el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor aceptará mensajes compatibles del dispositivo

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos y su detección de protocolo elimina la necesidad de especificar un tipo de protocolo más allá de la selección de transporte si el rastreador lo requiere.

## Requisitos típicos previos a la configuración

- Un dispositivo D39 cargado con acceso a su interfaz de SMS o a la interfaz de configuración del fabricante.
- Una tarjeta SIM funcional con datos habilitados y el APN correcto del operador móvil.
- Un teléfono con capacidad SMS o una herramienta de provisión para enviar comandos de configuración si se usa la configuración por SMS.
- Conocimiento de la contraseña por defecto del dispositivo (el ejemplo del fabricante muestra 123456) y las instrucciones para cambiarla después de la configuración.
- Acceso a la documentación oficial de Sentar o soporte del proveedor para comportamientos específicos de firmware.
- Confirmación de que el entorno objetivo tiene cobertura celular compatible con las bandas del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El D39 transmite información de posición y estado al endpoint y puerto del servidor Plaspy para que las ubicaciones, alertas y telemetría del dispositivo se muestren en los paneles de Plaspy. La configuración indica al reloj que envíe cargas periódicas al endpoint compartido de Plaspy y que utilice UDP o TCP según se requiera.

- El reloj sube correcciones de GPS y posicionamiento asistido al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El D39 puede configurarse para usar transporte UDP o TCP según el firmware y la preferencia del instalador.
- Plaspy recibe las cargas y detecta automáticamente el protocolo del rastreador para su correcto parseo y visualización.
- Los eventos SOS o alertas reportados por el dispositivo se enrutan a Plaspy para su visibilidad inmediata.
- Las cargas periódicas y reportes de estado permiten monitorizar batería y conectividad dentro de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Sentar para el D39 (comandos SMS de provisión o la herramienta del proveedor) según lo descrito en la documentación del fabricante.
2. Envíe o introduzca los datos APN del operador y confirme la conectividad GPRS para que el dispositivo pueda usar datos móviles.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir un transporte.
5. Aplique o guarde la configuración en el dispositivo y reinícelo si el dispositivo o la documentación del proveedor recomiendan un reinicio.
6. Verifique que el dispositivo reporte a Plaspy usando el comando de verificación del dispositivo o comprobando que el aparato sea visible en los paneles de Plaspy.
7. Cambie la contraseña por defecto del dispositivo (123456) por una contraseña segura después del registro, siguiendo las indicaciones de Sentar.

## Ejemplos de comandos de configuración

La documentación del Sentar D39 incluye comandos SMS que pueden usarse para la provisión. A continuación se muestran los comandos publicados en el mismo orden en que fueron facilitados. Respete las indicaciones del fabricante y confirme la sintaxis exacta en el firmware de su dispositivo antes de enviar comandos.

- Restauración de fábrica (paso inicial opcional)
```text
pw,123456,factory#
```

- Establecer la zona horaria a UTC+0
```text
pw,123456,lz,0,0#
```

- Comprobar MCC y MNC (verificación relacionada con IMSI)
```text
pw,123456,imsi#
```

- Establecer el APN del operador. El comando incluye marcadores para los valores APN y una sección de código de operador
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explicación de los marcadores:
- {{apn}} — nombre del APN primario del operador móvil
- {{apnu}} — nombre de usuario del APN si el operador lo requiere, o en blanco si no se usa
- {{apnp}} — contraseña del APN si el operador lo requiere, o en blanco si no se usa
- xxxyy — marcador en el comando publicado que indica los dígitos combinados MCC y MNC usados por el dispositivo

- Configurar el servidor GPRS a Plaspy por IP y puerto (tal como fue publicado)
```text
pw,123456.ip,54.85.159.138,8888#
```
Nota: La cadena de comando publicada contiene la secuencia literal mostrada arriba según el contenido del fabricante. Verifique si su firmware espera comas u otros separadores diferentes.

- Establecer el intervalo de subida a 300 segundos (5 minutos)
```text
pw123456,upload,300#
```
Nota: Este comando de subida fue publicado en el contenido del fabricante; confirme la sintaxis exacta para su firmware ya que algunas variantes incluyen una coma después de la contraseña.

- Comprobar la configuración actual
```text
pw,123456,ts#
```

Importante: El ejemplo del fabricante usa 123456 como contraseña por defecto del dispositivo en los ejemplos publicados. Cambie la contraseña del dispositivo después de la provisión cuando sea posible.

## Notas de configuración

- La provisión mediante SMS está incluida en los ejemplos públicos del fabricante; utilice un teléfono con capacidad para SMS y siga las recomendaciones del proveedor respecto a tiempos y reintentos.
- Las revisiones de firmware y hardware pueden modificar la sintaxis requerida de los comandos o los comandos soportados. Confirme siempre la sintaxis según las notas de la versión del firmware del dispositivo.
- Plaspy acepta UDP y TCP en el puerto 8888 para todos los dispositivos; elija UDP o TCP en el dispositivo solo si este requiere una selección de transporte.
- Mantenga los marcadores de APN, nombre de usuario y contraseña del APN precisos para el operador; una configuración de APN incorrecta impedirá las cargas GPRS.
- Después de la provisión inicial, verifique la visibilidad del dispositivo en Plaspy y cambie la contraseña por defecto cuando sea posible.

## Por qué usar Plaspy con esta configuración

Usar el Sentar D39 con Plaspy aporta reportes de ubicación y alertas en tiempo real dentro de un entorno de monitoreo consolidado, útil para padres, cuidadores y organizaciones que requieren visibilidad continua y detección de incidentes. La combinación de posicionamiento multimodo y cargas por celular permite actualizaciones oportunas de ubicación, mientras que la ingestión de reportes de dispositivo por parte de Plaspy ofrece un único lugar para alertas, historial y monitoreo de estado.

Para conocer más sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Para obtener instrucciones específicas más actuales del dispositivo, notas de firmware y comandos del fabricante, revise la documentación oficial de Sentar en http://www.sentarsmart.com/ ya que los procedimientos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
