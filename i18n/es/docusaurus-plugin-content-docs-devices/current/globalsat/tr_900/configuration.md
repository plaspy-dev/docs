---
slug: /globalsat/tr_900/configuration
id: tr_900-configuration
sidebar_label: Configuration
title: GlobalSat - TR-900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GlobalSat TR-900 para conectar el equipo a Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración GlobalSat TR-900
  - Configuración TR-900 Plaspy
  - Configuración de rastreador GlobalSat
  - Configuración de servidor TR-900
  - Configuración de plataforma GPS TR-900
  - Integración de rastreadores con Plaspy
  - Configuración de rastreador OBDII
  - Configuración SMS TR-900
  - Seguimiento de vehículos TR-900
  - Ajustes de servidor Plaspy
---

# GlobalSat - TR-900 Configuración

Esta página presenta el contexto público de configuración para utilizar el rastreador GlobalSat TR-900 con la plataforma Plaspy. Reúne los pasos prácticos dirigidos a instaladores y la plantillas de comando públicas que se usan para apuntar un TR-900 a Plaspy, de modo que el equipo pueda reportar datos de localización y OBDII a la plataforma.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles, detectando automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante para configurar el TR-900 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, aquí se incluyen las plantillas de comandos SMS públicas más comunes y orientación para aplicar los ajustes compartidos de Plaspy.

## Resumen de configuración

El proceso prepara al TR-900 para comunicarse con Plaspy, garantizando que la telemetría de localización y OBDII llegue a la plataforma de forma fiable. En el TR-900 esto normalmente implica enviar comandos de configuración por SMS o usar la herramienta oficial de GlobalSat, ajustar el endpoint y el puerto del servidor y verificar la conectividad.

- Configure el endpoint del servidor para que el TR-900 reporte a Plaspy
- Proporcione APN y parámetros de cuenta como marcadores si se requieren para datos móviles
- Verifique la selección de transporte (UDP o TCP) y establezca el puerto compartido de Plaspy
- Envíe la configuración usando el método del proveedor, como comandos SMS o el software oficial
- Reinicie o reinicie el rastreador si es necesario para aplicar los ajustes y validar el reporte

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo se conecta

Estos ajustes compartidos son los valores públicos de Plaspy que el TR-900 debe usar al apuntar el dispositivo a la plataforma.

## Requisitos previos a la configuración

- Un TR-900 alimentado y conectado al puerto OBDII del vehículo, en estado listo
- Una tarjeta SIM activa con datos móviles o capacidad SMS configurada en el dispositivo
- El IMEI del dispositivo disponible para usar en las plantillas de SMS o en las herramientas del fabricante
- Acceso a un teléfono capaz de enviar mensajes SMS o a la herramienta oficial de configuración de GlobalSat
- Confirmación del APN, usuario APN y contraseña APN con su operador móvil si son necesarios
- Conocimiento de la versión de firmware del dispositivo o acceso a la documentación del fabricante para diferencias específicas de firmware

## Cómo se conecta este rastreador a Plaspy

El TR-900 se configura para reportar ubicación y diagnósticos OBDII al endpoint y puerto compartidos de Plaspy. Una vez que el TR-900 tiene el servidor, puerto y parámetros APN correctos, utilizará su conexión de datos móviles para subir eventos y telemetría y así ser visible en Plaspy.

- El rastreador se dirige a d.plaspy.com o directamente a 54.85.159.138 como endpoint de reporte
- El dispositivo se configura para usar el puerto 8888 que Plaspy usa para todos los equipos
- El transporte se establece en UDP o TCP en el dispositivo, según lo que requiera el TR-900
- Plaspy identifica automáticamente el protocolo del equipo cuando el rastreador establece la conexión
- Tras una configuración exitosa, la ubicación y los eventos OBDII del rastreador se muestran en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GlobalSat, como el formato de comandos SMS del proveedor o la herramienta de software de GlobalSat. Este es el punto de partida recomendado.
2. Ingrese el servidor de Plaspy como d.plaspy.com o utilice la IP 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el TR-900 requiere elección de transporte y guarde esa opción.
5. Proporcione los ajustes APN [apn], [apnu] y [apnp] si el dispositivo necesita parámetros de datos móviles y éstos no están ya configurados.
6. Aplique o guarde la configuración en el dispositivo y envíe los SMS necesarios desde un teléfono si utiliza la configuración por SMS.
7. Reinicie o reinicie el TR-900 si es necesario para aplicar los nuevos ajustes del servidor.
8. Valide que el dispositivo reporte a Plaspy y aparezca en la vista de monitoreo de la plataforma.

## Ejemplos de comandos de configuración

El TR-900 admite configuración basada en SMS mediante plantillas de comando. Las siguientes plantillas públicas aparecen en la documentación del equipo y se muestran en el orden en que normalmente se aplican.

Marcadores importantes:
- [imei] — reemplace con el número IMEI del dispositivo
- [apn] — reemplace con el APN de la red móvil
- [apnu] — reemplace con el usuario del APN si es necesario
- [apnp] — reemplace con la contraseña del APN si es necesaria
- [checksum] y [checksumreeboot] — sumas de comprobación XOR en hexadecimal de dos caracteres en mayúsculas, calculadas sobre el texto del comando antes del carácter asterisco

Comando principal de configuración
```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```
- Este comando establece los campos APN y configura E0 como 54.85.159.138 y el puerto E1 como 8888. Mantenga los marcadores y sustitúyalos por sus valores antes de enviar.

Comando opcional de reinicio (usar cuando se requiera reiniciar para aplicar ajustes)
```text
GSC,[imei],3,0,LH*[checksumreeboot]!
```
- Este comando solicita un reinicio del dispositivo. Es opcional y debe emplearse cuando el rastreador requiera un reinicio para aplicar la configuración.

Cálculo del checksum
- El checksum se calcula como el XOR de los códigos ASCII de cada carácter del comando hasta, pero sin incluir, el carácter asterisco, y luego se convierte a una cadena hexadecimal de dos dígitos en mayúsculas. La documentación del dispositivo y las herramientas habituales de los proveedores ofrecen ayudantes para el checksum; el ejemplo en JavaScript usado en la documentación pública calcula el checksum de esta forma.

Notas sobre el envío
- Envíe estos comandos como mensajes SMS en texto plano desde un número de teléfono autorizado al TR-900 si usa configuración por SMS. Si utiliza la herramienta de configuración de GlobalSat, ingrese los mismos valores en los campos correspondientes.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los formatos exactos de los comandos o los campos requeridos; siempre confirme con las notas de la versión de firmware cuando estén disponibles.
- El TR-900 admite configuración por SMS como se muestra arriba; si lo prefiere, use el software oficial de GlobalSat o las herramientas del distribuidor cuando estén disponibles.
- Elija UDP o TCP según la opción del dispositivo; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Verifique siempre los marcadores IMEI y APN antes de enviar comandos para evitar una configuración incorrecta.
- Tras la configuración, valide el reporte en Plaspy y, si es necesario, reinicie el dispositivo usando el comando de reinicio proporcionado.

## Por qué usar Plaspy con esta configuración

Usar el GlobalSat TR-900 junto con Plaspy ofrece a las organizaciones una forma sencilla de consolidar datos GPS y OBDII de los vehículos en una sola plataforma de flotas. La integración OBDII del TR-900 combinada con el endpoint y puerto compartidos de Plaspy simplifica la implementación, ya que exige los mismos ajustes de servidor y puerto en los dispositivos compatibles, ayudando a las flotas a obtener visibilidad de ubicación, diagnósticos y eventos con mínima variación por equipo.

Para conocer más sobre Plaspy y cómo gestionar dispositivos TR-900 a escala visite https://www.plaspy.com. Para detalles de firmware más recientes del TR-900, referencias de comandos e instrucciones específicas del fabricante, verifique la documentación actual en el sitio de GlobalSat https://www.globalsat.com.tw/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
