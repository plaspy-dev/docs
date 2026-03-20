---
slug: /globalsat/lt_501/configuration
id: lt_501-configuration
sidebar_label: Configuration
title: GlobalSat - LT-501 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GlobalSat LT-501 con ajustes de servidor Plaspy y comandos de ejemplo para integrar el rastreador
keywords:
  - Configuración GlobalSat LT-501
  - Instalación GlobalSat LT-501
  - Configuración LT-501 Plaspy
  - Configuración servidor LT-501
  - Configuración rastreador GPS GlobalSat
  - Configuración software seguimiento LT-501
  - Configuración plataforma GPS LT-501
  - Configuración dispositivo Plaspy
  - Configuración rastreador de activos
  - Configuración rastreador LoRa
---

# GlobalSat - Configuración del LT-501

Esta página documenta el contexto público de configuración para usar el GlobalSat LT-501 con Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos disponibles públicamente, y muestra cómo se aplican esos valores al preparar un rastreador para que sea visible en la plataforma Plaspy. Use esta guía junto con la documentación del fabricante para obtener las instrucciones específicas del dispositivo y la versión de firmware más recientes.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La información de configuración del LT-501 incluida aquí contiene ejemplos de comandos SMS y el comportamiento de la suma de comprobación cuando está disponible públicamente; adapte los pasos a la herramienta del fabricante que utilice y a la versión de firmware del LT-501 en su unidad.

## Resumen de la configuración

Configurar el LT-501 para Plaspy significa preparar el dispositivo para que envíe su ubicación y estado al endpoint compartido de Plaspy y verificar que el dispositivo aparezca en la plataforma. Cuando existan comandos proporcionados por el fabricante puede aplicarlos directamente, o bien utilizar la herramienta del proveedor según el firmware del dispositivo.

- Dirija el rastreador al endpoint del servidor de Plaspy para que los datos lleguen a la plataforma.
- Proporcione cualquier ajuste de red o APN requerido mediante el método de configuración del dispositivo.
- Seleccione el transporte (UDP o TCP) si el dispositivo exige una selección explícita.
- Guarde y aplique la configuración, luego reinicie el rastreador si es necesario.
- Valide la conectividad confirmando que el dispositivo reporta a Plaspy y se muestra en la plataforma.
- Use la documentación del fabricante para confirmar la sintaxis de comandos y la generación de checksum.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el LT-501. Plaspy requiere el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Asegúrese de que el LT-501 tenga energía y esté en un estado conocido y listo para la configuración.
- Obtenga el IMEI del dispositivo o el identificador para usar en los comandos de configuración o en la herramienta del fabricante.
- Acceda al método de configuración del fabricante soportado por su unidad (comandos SMS o software del proveedor).
- Si el dispositivo requiere ajustes de datos móviles, tenga a mano los valores y credenciales del APN (puede usar valores temporales en los comandos).
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para confirmar el registro y la visibilidad del dispositivo.
- Un plan para verificar la versión de firmware y cualquier nota de configuración específica del proveedor para su revisión de hardware.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el LT-501 apunta al endpoint compartido y al puerto de Plaspy para que la plataforma reciba y procese su telemetría. La infraestructura de Plaspy acepta conexiones en el mismo puerto para todos los dispositivos compatibles y selecciona automáticamente el protocolo correcto.

- El rastreador se configura para enviar sus datos a d.plaspy.com o a 54.85.159.138.
- Los datos se transmiten al puerto 8888 en el endpoint de Plaspy.
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos entrantes.
- Una vez que reporta, el rastreador será visible para monitoreo de ubicación, eventos y operación en Plaspy.

## Flujo de trabajo típico de configuración

Siga este flujo de trabajo práctico al preparar el LT-501 para que reporte a Plaspy. Ajuste los pasos exactos según la herramienta del proveedor o la interfaz SMS disponible para su dispositivo.

1. Acceda al método oficial de configuración del fabricante o al software para el LT-501 (por ejemplo, la app del proveedor, herramienta USB o comandos SMS documentados por GlobalSat).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Aplique o guarde la configuración en la herramienta del proveedor o envíe los comandos SMS de configuración.
6. Reinicie o vuelva a arrancar el dispositivo si el fabricante lo requiere para aplicar los nuevos ajustes.
7. Valide que el dispositivo informe a Plaspy verificando la lista de dispositivos o monitoreando la telemetría entrante en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo se extraen de formatos de comandos del fabricante disponibles públicamente. Estos comandos usan marcadores de posición que debe reemplazar por valores específicos del dispositivo antes de enviarlos por SMS o mediante la herramienta del proveedor.

Notas sobre los marcadores de posición:
- [imei] — Reemplace con el IMEI del dispositivo o el identificador.
- [apn] — Nombre del punto de acceso (APN) para la red de datos móviles cuando sea necesario.
- [apnu] — Usuario del APN si la red móvil lo requiere.
- [apnp] — Contraseña del APN si la red móvil lo requiere.
- [checksum] y [checksumreeboot] — Valores hexadecimales de checksum calculados sobre el cuerpo del comando como se describe a continuación.

Comando para establecer el servidor del rastreador, APN y el endpoint Plaspy:
```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Comando opcional de reinicio para aplicar ajustes (enviar después de la configuración si es necesario):
```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Nota adicional de formato referenciada por el proveedor:
```
TSPRXAB27GHKLMnaicz*U!
```
(Usada en ejemplos de formato Plaspy en la documentación del proveedor; siga la guía del proveedor para su uso exacto.)

Cálculo del checksum
- El checksum en los ejemplos se genera calculando el XOR de los códigos ASCII de los caracteres del texto del comando hasta, pero sin incluir, el carácter '*' y luego convirtiendo el resultado a una cadena hexadecimal de dos dígitos en mayúsculas. Incluya ese checksum de dos caracteres hexadecimales en lugar del marcador [checksum].

Conserve el orden de los comandos al enviarlos para la configuración inicial: aplique primero el comando GSS y luego utilice el comando de reinicio si el fabricante recomienda un reinicio.

## Notas de configuración

- Las versiones de firmware del fabricante y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los campos disponibles; confirme siempre la sintaxis con la documentación actual de GlobalSat.
- Los comandos de ejemplo para el LT-501 mostrados arriba usan configuración basada en SMS tal como aparece en el ejemplo público del proveedor; si su unidad utiliza una herramienta de software o configuración por USB, siga ese método en su lugar.
- Elija UDP o TCP según la capacidad del dispositivo y las condiciones de la red; Plaspy acepta ambos y detectará automáticamente el protocolo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles; esto simplifica la configuración en instalaciones con múltiples rastreadores.
- Si se requieren campos APN, incluya los valores correctos para [apn], [apnu] y [apnp]; dejar estos campos vacíos o con datos incorrectos impedirá la conectividad celular donde aplique.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con la configuración del LT-501 centraliza los datos del dispositivo en un único endpoint de plataforma, lo que permite a las organizaciones monitorear la visibilidad de activos, recibir alertas y rastrear la actividad operativa del dispositivo en un solo lugar. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy reduce la complejidad de configuración y permite a Plaspy manejar automáticamente las diferencias entre protocolos.

Para obtener más información sobre Plaspy y sus funciones visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, notas de firmware y referencias oficiales de comandos, verifique la documentación del fabricante en https://www.globalsat.com.tw/ ya que las instrucciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
