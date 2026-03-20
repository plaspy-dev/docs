---
slug: /teltonika/fmm640/configuration
id: fmm640-configuration
sidebar_label: Configuration
title: Teltonika - FMM640 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar Teltonika FMM640 a Plaspy con ajustes de servidor y ejemplos de comandos
keywords:
  - Configuración Teltonika FMM640
  - Instalación Teltonika FMM640
  - Configuración servidor FMM640
  - Configuración FMM640 Plaspy
  - Configuración rastreador GPS Teltonika
  - Configuración rastreador Plaspy
  - Configuración rastreo vehicular
  - Rastreo de flotas Teltonika FMM640
  - Ajustes servidor rastreador GPS
  - Comandos configuración Teltonika
---

# Teltonika - Configuración del FMM640

Esta página ofrece el contexto público de configuración para usar el Teltonika FMM640 con Plaspy. Resume los ajustes de servidor compartidos por Plaspy, los pasos típicos de preparación y un ejemplo práctico de comando tomado de ejemplos públicos de Teltonika. Use esta guía para entender cómo apuntar el FMM640 a Plaspy y qué valores son necesarios para que el dispositivo sea visible en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. El FMM640 admite varios métodos de configuración, como SMS y Teltonika Configurator, y puede requerir pasos específicos según el firmware para ciertas opciones.

## Resumen de la configuración

Configurar el FMM640 para Plaspy prepara el equipo para enviar datos de ubicación y eventos a un único endpoint de Plaspy, de modo que los dispositivos aparezcan en la plataforma de forma fiable. El proceso público de configuración se centra en establecer el acceso a la red, el endpoint del servidor Plaspy, los parámetros de transporte y verificar que el dispositivo esté reportando correctamente.

- Configure el APN y las credenciales de red del dispositivo para que la unidad tenga conectividad de datos móviles.
- Apunte el rastreador al endpoint compartido del servidor Plaspy para que los datos se enruten a la plataforma.
- Seleccione la opción de transporte (UDP o TCP) en el dispositivo si es necesario.
- Guarde y aplique la configuración y reinicie el rastreador si es necesario para activar los cambios.
- Valide la conectividad del dispositivo y confirme que el rastreador sea visible dentro de Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Dispositivo alimentado y accesible según el procedimiento de instalación del FMM640.
- SIM activa con un plan de datos móviles apropiado y credenciales APN para la red donde operará el dispositivo.
- Acceso al método de configuración de Teltonika que prefiera, como comandos SMS, Teltonika Configurator o FOTA Web si es necesario.
- Conocimiento de los valores APN de la SIM, incluyendo nombre de APN, usuario APN y contraseña APN cuando el operador los requiera.
- Una cuenta de Plaspy o información de incorporación para poder confirmar que el dispositivo aparece en la plataforma después de la configuración.
- Familiaridad básica con la versión de firmware del dispositivo y las notas de la versión que puedan afectar los comandos de configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el FMM640 queda preparado para reportar su posición y eventos al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo aparezca en la plataforma para monitoreo e informes. Plaspy recibe las conexiones entrantes de los dispositivos en el mismo puerto para todos los equipos y detecta automáticamente el protocolo del rastreador.

- El rastreador envía actualizaciones periódicas de posición a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos pueden transmitirse por UDP o TCP según el transporte seleccionado durante la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el registro del dispositivo.
- Eventos como movimiento, activación de geocercas y alarmas se reenvían a Plaspy para su visualización.
- Tras una configuración exitosa, el dispositivo es visible en Plaspy para monitoreo operativo e informes.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de Teltonika, como comandos SMS, Teltonika Configurator o FOTA Web.
2. Configure los parámetros APN para que el FMM640 tenga acceso a la red usando los valores de nombre APN, usuario APN y contraseña APN.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como endpoint del dispositivo.
4. Establezca el puerto del servidor en 8888.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el flujo de trabajo lo requieren.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con datos en vivo o recientes.

## Ejemplo de comandos de configuración

El siguiente ejemplo se deriva de comandos setparam en el estilo publicado por Teltonika. Configura las credenciales APN y el endpoint y puerto del servidor Plaspy en un único comando por lote. Los marcadores de posición se mantienen para sus valores APN.

- Formato de ejemplo de comando SMS en lote proporcionado por la documentación del dispositivo:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición y campos
- [apn] es el nombre del APN de la red móvil para su SIM.
- [apnu] es el usuario del APN si el operador lo requiere.
- [apnp] es la contraseña del APN si el operador la requiere.
- El comando establece el dominio del servidor en d.plaspy.com y el puerto del servidor en 8888 tal como lo requiere Plaspy.
- El parámetro final 2006 se incluye en el ejemplo publicado; consulte la documentación de Teltonika para confirmar qué valor de transporte o modo se espera para su firmware y si debe usar UDP o TCP.

Si prefiere usar la IP del servidor de Plaspy directamente en lugar del nombre de dominio, puede reemplazar d.plaspy.com por 54.85.159.138 en su comando según las necesidades del operador y las capacidades del dispositivo.

## Notas de configuración

- Las versiones de firmware de Teltonika y la numeración de parámetros específicos del firmware pueden variar; confirme siempre las asignaciones de parámetros según la documentación del Teltonika FMM640 correspondiente a su revisión de firmware.
- El FMM640 admite configuración por SMS y por herramientas de software; elija el método que se ajuste a su práctica de instalación y requisitos de seguridad.
- Use UDP o TCP según la confiabilidad de la red y las recomendaciones de la documentación de Teltonika; Plaspy acepta cualquiera de los dos transportes en el puerto compartido.
- Recuerde que Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que es fundamental mantener valores consistentes de servidor y puerto.
- Cuando utilice marcadores de posición, mantenga sus credenciales APN seguras y verifíquelas con su operador móvil.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMM640 con Plaspy ofrece una forma sencilla de poner el dispositivo en línea hacia un único endpoint de la plataforma. Apuntar el rastreador al servidor y puerto compartidos de Plaspy permite a las organizaciones consolidar la telemetría de múltiples dispositivos y fabricantes, confiando en que Plaspy detectará los protocolos de forma automática. Esto simplifica la incorporación y hace que la visibilidad operativa y los informes sean más consistentes en una flota mixta.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, definiciones de parámetros y comportamiento del firmware consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para verificar los métodos de configuración y las asignaciones de parámetros actuales.
