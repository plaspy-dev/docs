---
slug: /bofan/pt502/configuration
id: pt502-configuration
sidebar_label: Configuration
title: Bofan - PT502 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Bofan PT502 con ajustes de servidor Plaspy comandos SMS y consideraciones de instalación
keywords:
  - Configuración Bofan PT502
  - Configuración PT502
  - Bofan PT502 en Plaspy
  - Configuración rastreador GPS PT502
  - Configuración de servidor PT502
  - Configuración SMS PT502
  - Guía de instalación rastreador Bofan
  - Configuración rastreador GPS Plaspy
  - Configuración flota PT502
  - Configuración APN PT502
---

# Bofan - Configuración PT502

Esta página presenta la información pública de configuración para usar el rastreador GPS Bofan PT502 con Plaspy. Explica los ajustes de servidor compartidos que debe aplicar en el dispositivo, muestra los comandos SMS más comunes publicados para el PT502 y describe el flujo de trabajo típico que los operadores utilizan para que el equipo informe a Plaspy. El PT502 admite configuración por SMS en la documentación pública del fabricante y los ejemplos de comandos usan la contraseña por defecto 000000 para la puesta en marcha inicial.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, de modo que la plataforma acepta tráfico correctamente dirigido sin necesidad de asignación de puertos por dispositivo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que los comandos y el flujo aquí descritos son orientación práctica y pública y no instrucciones exhaustivas del dispositivo.

## Resumen de la configuración

El proceso prepara al PT502 para comunicarse de forma fiable con Plaspy para que la ubicación, los eventos y la telemetría aparezcan en la plataforma. En los PT502 esto suele implicar asignar un identificador de dispositivo, configurar el APN celular para datos, apuntar el equipo al endpoint y puerto del servidor Plaspy y elegir el modo de transporte si es necesario.

- Asignar el identificador del rastreador que usa Plaspy, normalmente un ID de 14 dígitos derivado del IMEI.  
- Configurar el APN del operador y, si aplica, el usuario y la contraseña del APN para que el dispositivo utilice datos GPRS/4G.  
- Apuntar el equipo al endpoint y puerto del servidor de Plaspy para que los paquetes se encaminen correctamente.  
- Seleccionar UDP o TCP si el dispositivo requiere elegir el transporte.  
- Establecer un intervalo de reporte acorde a sus necesidades de monitoreo y al plan de datos.  
- Validar la conectividad para confirmar que el dispositivo aparece en Plaspy y envía actualizaciones periódicas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Todos los dispositivos en Plaspy usan el mismo puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos antes de la configuración

- Un dispositivo PT502 alimentado y accesible con su IMEI registrado para la configuración del identificador.  
- Una tarjeta SIM activa con un plan de datos adecuado y capacidad de SMS si va a utilizar configuración por SMS.  
- Los datos correctos del APN del operador (APN, opcional usuario APN, opcional contraseña APN).  
- Acceso al método de configuración que acepte el PT502, como comandos SMS o software del proveedor.  
- Conocimiento de la contraseña por defecto del dispositivo si es necesaria para los comandos (los ejemplos públicos usan 000000 como contraseña por defecto).  
- Un medio para enviar y recibir SMS con el dispositivo para verificación si utiliza provisión vía SMS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el PT502 reporta su ubicación y los datos de eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. Plaspy agrega esos datos entrantes para ofrecer mapas en vivo, alertas, historial e informes operativos. El dispositivo suele enviar actualizaciones periódicas de posición y mensajes desencadenados por eventos que aparecen en Plaspy cuando se confirma la conectividad.

- El PT502 se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del equipo y las preferencias de instalación.  
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar los datos sin necesidad de configurar el protocolo por dispositivo.  
- El rastreador envía informes periódicos de posición y mensajes por eventos para que Plaspy proporcione visibilidad en tiempo real.  
- Una configuración exitosa se traduce en que el dispositivo aparece en Plaspy y las actualizaciones se reciben en el intervalo esperado.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el PT502 (los comandos SMS suelen publicarse por el vendedor).  
2. Prepare identificadores y credenciales como el IMEI y la contraseña del dispositivo (los ejemplos públicos usan 000000 como valor por defecto).  
3. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor según las instrucciones del fabricante.  
4. Configure el puerto 8888 en la configuración del dispositivo y elija UDP o TCP si el equipo requiere selección de transporte.  
5. Configure el APN celular con los valores del operador para que el PT502 pueda conectarse mediante GPRS/4G.  
6. Aplique o guarde la configuración y reinicie el equipo si el firmware del PT502 lo exige.  
7. Valide que el dispositivo reporta a Plaspy confirmando que aparece en la plataforma y envía actualizaciones en el intervalo configurado.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del PT502 muestran comandos SMS usados para la puesta en marcha. Las muestras usan la contraseña de dispositivo 000000 como valor por defecto. Preserve la secuencia al realizar una configuración inicial.

- Reinicio inicial u opcional de fábrica (usar solo si es necesario):
```text
000000DFT
```

- Establecer un identificador de 14 dígitos usado con la plataforma. Reemplace \<14-digit-id> por los últimos 14 dígitos del IMEI del dispositivo:
```text
000000GID<14-digit-id>
```

- Configurar el APN del operador. Reemplace [apn] con el APN de su operador. Si el APN requiere usuario o contraseña, incluya [apnu] y [apnp] respectivamente:
```text
000000APN[apn]
```
Si se requieren usuario y contraseña, el formato del proveedor puede añadirlos así:
```text
000000APN[apn],[apnu],[apnp]
```
(Mantenga [apnu] y [apnp] como marcadores cuando no se usen.)

- Establecer el servidor GPRS a la IP y puerto de Plaspy:
```text
000000SVR54.85.159.138,8888
```

- Establecer el intervalo de actualización a 60 segundos (ejemplo para reportes cada minuto):
```text
000000GTI60
```

Notas sobre estos comandos:
- El comando de reseteo 000000DFT es opcional y suele usarse durante el aprovisionamiento inicial o para restaurar valores de fábrica cuando sea necesario.  
- El comando GID espera un identificador de 14 dígitos; se recomienda usar los últimos 14 dígitos del IMEI.  
- Preserve los marcadores como [apn], [apnu] y [apnp] y reemplácelos por los valores de su operador al enviar los comandos.

## Notas de configuración

- Las versiones de firmware del fabricante y las revisiones de hardware pueden cambiar la sintaxis y el comportamiento de los comandos; verifique los formatos con la documentación oficial del PT502.  
- La configuración por SMS es un método público habitual para el PT502, pero también pueden existir herramientas o software del proveedor; utilice el método oficial recomendado por el instalador o el vendedor.  
- Elija UDP o TCP según las necesidades de la instalación y el comportamiento de la red; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Plaspy utiliza el mismo puerto para todos los dispositivos, así que siempre configure el puerto 8888 al apuntar un equipo a Plaspy.  
- Mantenga segura la contraseña del dispositivo y cambie los valores por defecto cuando sea posible tras el aprovisionamiento inicial.

## Por qué usar Plaspy con esta configuración

Usar el PT502 con Plaspy ofrece un camino sencillo hacia la visibilidad de flotas y el monitoreo de eventos. Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y configurar el APN y el identificador permitirá que el dispositivo entregue actualizaciones de ubicación y datos de eventos a Plaspy, donde los operadores podrán ver mapas en vivo, alertas e informes históricos.

Para obtener más información sobre Plaspy y flujos de trabajo compatibles visite https://www.plaspy.com. Para los comandos más recientes del PT502, notas de firmware y la guía del fabricante, verifique los detalles en el sitio oficial de Bofan https://www.bofancloud.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
