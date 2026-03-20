---
slug: /megastek/mt65/configuration
id: mt65-configuration
sidebar_label: Configuration
title: Megastek - MT65 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración Megastek MT65 con ajustes de servidor Plaspy y comandos SMS para GPRS y TCP UDP
keywords:
  - Configuración Megastek MT65
  - Instalación Megastek MT65
  - Configuración de servidor MT65
  - Configuración MT65 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador de tobillo
  - Comandos SMS MT65
  - Configuración GPRS rastreador
  - Integración plataforma GPS
  - Configuración dispositivo wearable
---

# Megastek - MT65 Configuración

Esta página describe el contexto público de configuración para usar el rastreador de tobillo Megastek MT65 con la plataforma Plaspy. Se enfoca en los valores prácticos del servidor, ejemplos de comandos SMS facilitados por el fabricante y el flujo general necesario para apuntar un MT65 a Plaspy para monitoreo en vivo y reproducción histórica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT65 soporta reportes por SMS y GPRS, y el fabricante proporciona plantillas SMS comúnmente usadas para establecer el ID del dispositivo, el APN, la dirección del servidor, el intervalo de reporte y el modo GPRS.

## Visión general de la configuración

Configurar el MT65 para Plaspy prepara el rastreador de tobillo para enviar ubicaciones, alarmas y telemetría al endpoint de Plaspy, de modo que supervisores y gestores de casos puedan ver la posición en tiempo real, recibir alertas y revisar recorridos históricos. El proceso de configuración normalmente se realiza mediante comandos SMS o con la herramienta oficial de Megastek según la preferencia del instalador y el firmware del dispositivo.

- Apunte el dispositivo al dominio o IP del servidor de Plaspy y use el puerto compartido por la plataforma.
- Configure el APN del operador celular para que el rastreador establezca una sesión de datos GPRS.
- Establezca un intervalo de reporte acorde con la política de supervisión, por ejemplo 60 segundos para actualizaciones frecuentes.
- Habilite el modo de reporte por GPRS para que la telemetría se envíe a Plaspy por TCP o UDP.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy y envía actualizaciones de posición regulares.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que solo debe apuntar el dispositivo al endpoint del servidor y usar el puerto 8888.

## Requisitos habituales antes de la configuración

- Un dispositivo MT65 con batería cargada y una tarjeta SIM funcional con datos y SMS habilitados.
- Acceso al IMEI del dispositivo para poder establecer el ID del equipo o registrarlo en Plaspy.
- Conocimiento de los valores APN del operador móvil de la SIM.
- Capacidad para enviar comandos SMS al rastreador o acceso a la herramienta oficial de configuración Megastek.
- Acceso a la cuenta de Plaspy o instrucciones de incorporación para confirmar que el dispositivo es visible después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el MT65 envía posiciones, estados de alarma y telemetría al endpoint compartido y puerto de Plaspy. Plaspy recibe los datos y detecta automáticamente el protocolo del rastreador, lo que permite monitoreo en tiempo real y notificaciones basadas en eventos.

- El rastreador inicia una sesión de datos GPRS y envía la telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte TCP o UDP según la configuración; Plaspy acepta ambos.
- Alarmas como SOS, manipulación y batería baja se transmiten a Plaspy para alertas inmediatas.
- Plaspy registra los recorridos históricos y soporta reproducción en vivo y flujos de trabajo de gestión de casos.
- El SMS sigue siendo un canal alternativo para ciertos comandos y alertas según el firmware y la configuración del MT65.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración Megastek, o prepárese para enviar comandos SMS compatibles con el MT65.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte durante la configuración.
5. Configure el APN y otros parámetros del operador para que el dispositivo obtenga conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el equipo reporte a Plaspy y aparezca con actualizaciones de posición y telemetría en tiempo real.

## Comandos de configuración de ejemplo

El fabricante proporciona plantillas SMS para la configuración básica. El ejemplo siguiente usa la contraseña de dispositivo de muestra 000000, que es el valor por defecto en la documentación del fabricante. Reemplace los marcadores por valores reales antes de enviar cualquier SMS.

1. Establecer el ID del dispositivo usando el IMEI. Use los últimos 15 dígitos del IMEI cuando el firmware lo requiera. Ejemplo de cuerpo SMS:

```text
M000000,22,[imei]
```

2. Configurar el APN del operador. Mantenga [apnu] y [apnp] solo si su APN requiere usuario o contraseña. Ejemplo:

```text
M000000,23,[apn]
```

Con usuario y contraseña opcionales incluidos:

```text
M000000,23,[apn],[apnu],[apnp]
```

3. Establecer el intervalo de actualización a 60 segundos:

```text
M000000,25,60
```

4. Configurar el servidor GPRS hacia Plaspy usando la IP y el puerto proporcionados. El ejemplo usa el formato de comando del fabricante que incluye un código interno antes de los valores del servidor:

```text
M000000,24,56 54.85.159.138,8888
```

Si su herramienta de instalación acepta un dominio en lugar de IP, puede usar el dominio de Plaspy cuando sea compatible:

```text
M000000,24,56 d.plaspy.com,8888
```

5. Habilitar el modo de reporte GPRS (el ejemplo establece modo 2 para GPRS):

```text
M000000,21,2
```

Notas sobre los marcadores
- [imei] Reemplácelo con el IMEI del dispositivo o con los últimos 15 dígitos según lo requiera el dispositivo.
- [apn] Reemplace con la cadena APN del operador.
- [apnu] Usuario APN opcional cuando lo requiera el operador.
- [apnp] Contraseña APN opcional cuando lo requiera el operador.

Siempre confirme el formato SMS correcto para su versión de firmware antes de enviar comandos. Algunas variantes de firmware requieren diferencias leves en el formato o parámetros adicionales.

## Observaciones de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los SMS o el conjunto de comandos disponible. Verifique la sintaxis contra la revisión de firmware del dispositivo.
- El MT65 soporta tanto configuración por SMS como aprovisionamiento por software. Elija el método que se ajuste a su despliegue y nivel de acceso.
- Use TCP o UDP según su red y requisitos de latencia. Plaspy acepta ambos y detecta automáticamente el protocolo usado por el rastreador.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración del servidor al desplegar múltiples modelos de rastreadores.
- Si el dispositivo admite entradas de servidor por dominio e IP, puede usar d.plaspy.com o 54.85.159.138; confirme con su instalador cuál enfoque es preferible.

## Por qué usar Plaspy con esta configuración

Usar el MT65 con Plaspy ofrece una vía simple hacia la supervisión centralizada para organizaciones que requieren monitoreo persistente de dispositivos wearables. Al apuntar el dispositivo a Plaspy y aprovechar el puerto compartido y la detección automática de protocolo, los equipos obtienen visibilidad en tiempo real, gestión de alarmas y registro histórico sin cambios complejos por dispositivo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la información de configuración más reciente en el sitio del fabricante https://www.megastek.com/ antes del despliegue.
