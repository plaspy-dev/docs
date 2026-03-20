---
slug: /totemtech/at09/configuration
id: at09-configuration
sidebar_label: Configuration
title: Totemtech - AT09 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Totemtech AT09 y los ajustes de servidor Plaspy para integrar el rastreador GPS
keywords:
  - Configuración Totemtech AT09
  - Instalación Totemtech AT09
  - Configuración servidor AT09
  - AT09 rastreador GPS Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreo vehicular
  - Rastreo de flotas AT09
  - Guía configuración rastreador GPS
  - Configuración SMS AT09
  - Comandos Totemtech
---

# Totemtech - Configuración AT09

Esta página explica el contexto público de configuración para usar el rastreador GPS Totemtech AT09 con Plaspy. Consolida los ajustes del servidor Plaspy que necesitará, describe el flujo de configuración habitual y ofrece los comandos SMS públicos disponibles para el AT09 para que pueda preparar el dispositivo y reportar a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo comience a reportar a la plataforma. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía se centra en los valores y comandos públicos necesarios para preparar el AT09 y conectar con éxito a Plaspy.

## Resumen de configuración

El objetivo del proceso es preparar el AT09 para que envíe datos de posición, estado y eventos a la plataforma Plaspy, de modo que el dispositivo sea visible y manejable desde la plataforma. El AT09 admite métodos de configuración por SMS y GPRS que son comunes entre instaladores; los comandos SMS públicos que aparecen a continuación ejemplifican un flujo de configuración típico.

- Asignar el APN correcto y las credenciales GPRS para que el rastreador utilice datos móviles y alcance Plaspy.
- Apuntar el dispositivo al servidor de Plaspy usando el dominio o la IP compartida y el puerto estándar de Plaspy.
- Seleccionar el protocolo de transporte (UDP o TCP) si el dispositivo lo requiere, luego guardar y aplicar la configuración.
- Validar la conectividad para que Plaspy reciba la primera posición o latido y detecte automáticamente el protocolo.
- Configurar los intervalos de reporte y el comportamiento de acuse de recibo para ajustar la fiabilidad y el consumo de datos según sus necesidades.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto para comunicación con el servidor

## Requerimientos típicos antes de la configuración

- Alimentar el AT09 con una fuente estable y confirmar que los LEDs indican un estado normal del dispositivo.
- Una tarjeta SIM operativa con un plan de datos y el APN correcto del operador móvil.
- Acceso al método de configuración que soporte el AT09, por ejemplo comandos SMS o la herramienta oficial de Totemtech.
- Conocer la contraseña del dispositivo; en los ejemplos públicos se usa la contraseña por defecto 000000.
- Familiaridad básica para enviar comandos SMS o usar la interfaz de configuración de Totemtech.
- Una cuenta en Plaspy o contacto con el administrador de Plaspy para confirmar la visibilidad del dispositivo una vez que esté reportando.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT09 enviará datos por GPRS al endpoint y puerto compartidos de Plaspy para que la plataforma reciba telemetría y actualizaciones de ubicación y detecte automáticamente el protocolo del dispositivo. El AT09 permite enviar datos a dos servidores simultáneamente, lo que puede emplearse para redundancia junto a Plaspy.

- El rastreador establece una conexión GPRS y envía datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según la preferencia del instalador o la compatibilidad del firmware.
- Plaspy recibe los paquetes del dispositivo e identifica automáticamente el protocolo, por lo que normalmente no es necesario seleccionar el protocolo manualmente en Plaspy.
- Una vez que reporta, el dispositivo aparece en Plaspy para seguimiento en vivo, trazas históricas y monitoreo de eventos.
- Los ajustes de acuse de recibo y de intervalos de reporte pueden configurarse en el dispositivo para controlar la fiabilidad y el uso de datos.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Totemtech, o prepárese para enviar comandos SMS según lo documentado por el fabricante.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138 en la configuración del dispositivo.
3. Configure el puerto del servidor en 8888; tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si se requiere elegir el transporte.
5. Configure el APN y las credenciales GPRS para que el rastreador pueda conectarse a los servicios de datos móviles.
6. Guarde o aplique la configuración en el dispositivo y reinícielo si el fabricante o las instrucciones del dispositivo lo requieren.
7. Valide que el dispositivo reporte a Plaspy y que la plataforma detecte el protocolo y muestre telemetría entrante.

## Ejemplos de comandos de configuración

El AT09 admite configuración por SMS. Los ejemplos públicos siguientes usan la contraseña por defecto del dispositivo 000000. Reemplace los marcadores con sus valores reales donde se indique. El comando de restablecimiento de fábrica es opcional y solo debe usarse si necesita revertir el dispositivo a los valores de fábrica.

- Restablecer a configuración de fábrica (opcional)
``` 
*000000,007#
```

- Establecer el APN del operador (reemplace los marcadores con sus credenciales)
```
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explicación de los marcadores:
- {{apn}} es el nombre del APN del operador (por ejemplo internet)
- {{apnu}} es el usuario del APN cuando el operador lo requiere; si no aplica, dejar en blanco
- {{apnp}} es la contraseña del APN cuando el operador lo requiere; si no aplica, dejar en blanco

- Configurar el servidor GPRS a Plaspy usando la IP y el puerto y habilitar la ranura de servidor primaria
```
*000000,003,54.85.159.138,8888,1
```
Esto apunta el AT09 a Plaspy en 54.85.159.138 puerto 8888. Alternativamente puede usar el dominio d.plaspy.com si su dispositivo soporta dominios en lugar de IP.

- Establecer comportamiento de ACK
```
*000000,019,1#
```

- Establecer intervalo de actualización a 60 segundos
```
*000000,60,60,0,60#
```

Nota: Mantenga la contraseña por defecto si no se ha cambiado. Si su dispositivo tiene una contraseña distinta, reemplace 000000 por la contraseña activa en estos comandos.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden modificar la sintaxis de los comandos y las funciones; confirme siempre la compatibilidad de los comandos con la versión de firmware de su dispositivo.
- El AT09 admite configuración por SMS como se muestra aquí; también pueden existir software o herramientas de Totemtech que ofrezcan una alternativa con interfaz gráfica.
- Elija UDP para menor sobrecarga o TCP si requiere mayor fiabilidad de conexión; recuerde que Plaspy soporta ambos transportes en el puerto 8888.
- APN, usuario y contraseña del APN son específicos del operador; utilice los valores exactos proporcionados por su operador de SIM y conserve los marcadores cuando prepare los comandos.
- Si configura ambas ranuras de servidor, puede aprovechar la capacidad dual del AT09 para redundancia y apuntar una ranura a Plaspy y la otra a un endpoint de respaldo si lo requiere.

## Por qué usar Plaspy con esta configuración

Usar el Totemtech AT09 con Plaspy ofrece una forma práctica de centralizar el rastreo de vehículos, el monitoreo de estados y el reporte de eventos en una sola plataforma. Con el AT09 configurado para reportar a Plaspy en el endpoint y puerto compartidos, las organizaciones pueden obtener rápidamente visibilidad de sus activos, revisar trazas históricas y recibir alertas basadas en los datos del dispositivo.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el Totemtech AT09 visite https://www.plaspy.com. Para conocer el comportamiento específico del firmware y la sintaxis de comandos más reciente, verifique siempre la información actualizada en el sitio del fabricante http://www.totemtek.com/.
