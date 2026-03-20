---
slug: /globalsat/lt_520az/configuration
id: lt_520az-configuration
sidebar_label: Configuration
title: GlobalSat - LT-520AZ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat LT-520AZ y apuntarlo a Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración GlobalSat LT-520AZ
  - instalación LT-520AZ Plaspy
  - configuración rastreador GlobalSat
  - configuración SMS LT-520AZ
  - configuración servidor Plaspy
  - LT-520AZ Amazon Sidewalk
  - LT-520AZ BLE GNSS
  - seguimiento de flotas LT-520AZ
  - seguimiento de activos LT-520AZ
  - guía de configuración LT-520AZ
---

# GlobalSat - Configuración del LT-520AZ

Esta página documenta el contexto público de configuración para usar el rastreador GlobalSat LT-520AZ con Plaspy. Explica los ajustes prácticos del servidor y el formato de comandos SMS publicados por el proveedor para apuntar el dispositivo a Plaspy. Use esta guía para preparar el equipo para la comunicación con Plaspy y comprender qué valores espera la plataforma.

Plaspy emplea configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando el LT-520AZ admite comandos por SMS, esta guía conserva el formato de comandos proporcionado por el proveedor y explica los marcadores de posición y el cálculo de la suma de verificación para que pueda aplicar los pasos públicos de forma consistente.

## Resumen de la configuración

Este proceso prepara el LT-520AZ para enviar ubicación, eventos de movimiento y telemetría a Plaspy, de modo que el dispositivo quede visible y administrable en la plataforma. El formato de comandos por SMS suministrado por el proveedor puede utilizarse para programar el endpoint del servidor y parámetros relacionados desde un teléfono o una pasarela SMS.

- Apunte el dispositivo al endpoint compartido de Plaspy para que el rastreador reporte directamente en la plataforma.
- Rellene los campos obligatorios como el IMEI y los marcadores de posición de configuración y calcule la suma de verificación del comando.
- Elija el transporte (UDP o TCP) y el puerto compartido que coincida con los ajustes del servidor de Plaspy.
- Guarde y aplique la configuración y reinicie el rastreador si es necesario para comenzar a reportar.
- Valide la conectividad y la visibilidad en Plaspy confirmando que el dispositivo aparece y envía telemetría.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos compatibles

Estos valores son los ajustes públicos compartidos que debe usar al configurar el LT-520AZ para Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Alimentación confiable para el rastreador y acceso al IMEI del dispositivo para la configuración.
- Acceso al método oficial de configuración de GlobalSat o a comandos y herramientas proporcionadas por el proveedor.
- Capacidad para enviar comandos SMS desde un teléfono o una pasarela SMS si va a usar el método de configuración por SMS mostrado por el proveedor.
- Conocimiento de los campos APN que acepta el comando del proveedor; en los ejemplos se conservan los marcadores de posición.
- Un entorno de pruebas o un dispositivo de repuesto para validar los ajustes antes de un despliegue masivo.
- Acceso al firmware y a la documentación del fabricante para confirmar detalles específicos del dispositivo o diferencias de firmware.

## Cómo se conecta este rastreador a Plaspy

El LT-520AZ se configura para reportar su GNSS, detecciones asistidas por BLE, eventos de movimiento basados en el acelerómetro y el estado de la batería a Plaspy apuntando el rastreador al endpoint y puerto del servidor Plaspy. Una vez configurado, Plaspy ingiere esos reportes y ofrece mapas en vivo, alertas e informes históricos.

- El dispositivo se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte puede ser UDP o TCP según las opciones de configuración del dispositivo o del comando SMS.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda interpretar la telemetría entrante del LT-520AZ.
- Al comenzar a reportar, Plaspy agrega la ubicación y la telemetría de movimiento del dispositivo en paneles, geocercas y alertas.
- Valide la conectividad confirmando que el rastreador aparece en Plaspy y envía actualizaciones periódicas.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de GlobalSat o al software para el LT-520AZ, o utilice el formato de comando SMS proporcionado por el proveedor si está disponible.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 según lo acepte el dispositivo.
3. Configure el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración usando la herramienta del fabricante o enviando el comando SMS correspondiente.
6. Reinicie o haga reboot del dispositivo si el método de configuración lo solicita para activar los nuevos ajustes.
7. Verifique que el dispositivo reporte a Plaspy revisando la conectividad del dispositivo y la telemetría reciente en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos públicos proporcionados por el proveedor para el LT-520AZ se envían por SMS. El formato publicado y los comandos de ejemplo a continuación se han convertido desde la página del fabricante a una forma clara y reproducible. Conserve los marcadores de posición exactamente y sustitúyalos por sus valores antes de enviar.

Format used by Plaspy
TSPRXAB27GHKLMnaicz*U!

Comando de configuración (reemplace marcadores de posición y calcule la suma de verificación antes de enviar):
- Reemplace [imei] por el IMEI del dispositivo.
- Reemplace [apn], [apnu], [apnp] por APN, usuario APN y contraseña APN si su configuración lo requiere. Para dispositivos que usan exclusivamente Amazon Sidewalk, los campos APN pueden no utilizarse o ser ignorados; verifique con el fabricante.
- Calcule [checksum] como la suma de verificación XOR de los caracteres del comando desde el inicio del comando interno hasta justo antes del carácter '*' y exprésela como un valor hexadecimal en mayúsculas de dos dígitos.

Ejemplo de comando SMS de configuración:
```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Comando opcional de reinicio (use cuando la documentación del dispositivo indique que el reinicio es requerido o recomendado):
```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Cálculo de la suma de verificación
- La suma de verificación se calcula aplicando XOR a los códigos ASCII de cada carácter en la cadena del comando desde el primer carácter hasta el carácter inmediatamente anterior al '*'.
- Convierta el resultado numérico a una cadena hexadecimal en mayúsculas con dos caracteres (complete con cero a la izquierda si es necesario). Inserte ese valor en lugar de [checksum] o [checksumreeboot].
- Las páginas del fabricante a menudo incluyen un pequeño script para calcular esta suma automáticamente; el algoritmo es un XOR de un solo byte sobre los caracteres descritos arriba.

Notas sobre los marcadores de posición
- [imei] — número IMEI del dispositivo, necesario para dirigir el comando al rastreador específico.
- [apn] — marcador de posición para el nombre del APN; incluya solo si su instalación y configuración del dispositivo requieren valores APN.
- [apnu] — marcador de posición para el usuario APN.
- [apnp] — marcador de posición para la contraseña APN.

Verifique siempre la sintaxis exacta del comando SMS y el método de cálculo de la suma de verificación en la documentación oficial de GlobalSat antes de enviar comandos en producción.

## Notas de configuración

- El formato de comando del proveedor arriba usa configuración por SMS; confirme que la programación por SMS está soportada y activada en su lote de rastreadores y en la versión de firmware.
- Las revisiones de firmware y las variantes de fabricación pueden cambiar la sintaxis exacta del comando y las expectativas de la suma de verificación; revise la documentación de GlobalSat para su revisión de dispositivo.
- Plaspy acepta reportes en el endpoint compartido y usa el puerto 8888 en todos los dispositivos compatibles; elija UDP o TCP según la capacidad del dispositivo y las consideraciones de red.
- Si el rastreador admite entradas de servidor por IP y por dominio, puede usar d.plaspy.com o 54.85.159.138 según corresponda a la interfaz de configuración.
- Realice pruebas después de la configuración para asegurar que la telemetría se parsea correctamente y que el dispositivo aparece en Plaspy como se espera.

## Por qué usar Plaspy con esta configuración

Usar el LT-520AZ con Plaspy ofrece una vía práctica para integrar un seguimiento de activos de larga autonomía en un flujo de trabajo de flotas o monitoreo de activos. Apuntar el dispositivo a los ajustes de servidor compartido de Plaspy permite que la plataforma recoja ubicación, movimiento y telemetría de batería para que los equipos puedan supervisar activos, recibir alertas y analizar desplazamientos históricos sin necesidad de configurar servidores propios.

Para saber más sobre Plaspy y cómo puede administrar dispositivos LT-520AZ a escala, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento del firmware y los detalles del fabricante, verifique la documentación oficial en https://www.globalsat.com.tw/ ya que la orientación del fabricante puede cambiar con el tiempo.
