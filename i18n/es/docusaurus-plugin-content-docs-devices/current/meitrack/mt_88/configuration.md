---
slug: /meitrack/mt_88/configuration
id: mt_88-configuration
sidebar_label: Configuration
title: Meitrack - MT-88 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Meitrack MT-88, apuntarlo a Plaspy y validar la conectividad
keywords:
  - Meitrack MT-88
  - Configuración MT-88
  - Configurar rastreador Meitrack
  - MT-88 Plaspy
  - Ajustes servidor MT-88
  - Configuración GPS Meitrack
  - Configuración GPRS MT-88
  - Comandos SMS MT-88
  - Plataforma de rastreo Meitrack
  - Configuración de rastreador GPS
---

# Meitrack - Configuración del MT-88

Esta página describe el contexto público de configuración para usar el Meitrack MT-88 con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera y los comandos y pasos públicos más comunes para configurar el MT-88 y que así reporte sus datos a Plaspy para seguimiento y monitoreo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del vendedor. Cuando están disponibles, esta guía incluye los comandos SMS publicados para el MT-88 para que aplique las configuraciones públicas conocidas usadas con Plaspy.

## Resumen de la configuración

El proceso de configuración prepara el MT-88 para enviar datos de ubicación y eventos a la plataforma Plaspy. En el MT-88 esto normalmente implica configurar un servidor GPRS o usar los comandos SMS del fabricante para indicar al dispositivo dónde enviar la telemetría por la red celular.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que los datos lleguen a la plataforma
- Configurar el APN requerido y, si aplica, las credenciales para que el dispositivo use GPRS
- Seleccionar transporte y puerto y guardar la configuración en el equipo
- Validar que el dispositivo reporte verificando su visibilidad en Plaspy
- Usar los comandos SMS del MT-88 cuando no se disponga de herramientas de software

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP según capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un único puerto funciona para todos los equipos

## Requisitos típicos antes de la configuración

- Un MT-88 con alimentación y una SIM activa que tenga datos habilitados
- Conocimiento del APN de la tarjeta SIM y de cualquier credencial APN requerida por el operador móvil
- Acceso al método oficial de configuración de Meitrack, como comandos SMS o software del proveedor
- La contraseña por defecto del MT-88 para comandos SMS es 0000, salvo que haya sido cambiada
- Entender si el dispositivo usará UDP o TCP para el transporte de datos
- Un lugar en Plaspy donde visualizar los reportes una vez que el dispositivo esté conectado

## Cómo se conecta este rastreador a Plaspy

El MT-88 se configura para enviar telemetría al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tenga una conexión GPRS funcional y los ajustes de servidor estén guardados, el rastreador enviará actualizaciones de ubicación e informes de estado a Plaspy donde se muestran en la plataforma para monitoreo y uso operativo.

- El dispositivo envía datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la elección de configuración del MT-88
- Plaspy detecta automáticamente el protocolo correcto del rastreador cuando llegan los datos
- Las actualizaciones periódicas de posición y los eventos configurados se reenvían a Plaspy para su visualización
- La validación consiste en confirmar que el dispositivo aparece y reporta en la interfaz de Plaspy

## Flujo común de configuración

1. Acceda al método oficial de configuración de Meitrack, como comandos SMS o el software del fabricante
2. Ingrese el dominio del servidor d.plaspy.com o use la IP 54.85.159.138 en el campo de host del servidor
3. Configure el puerto a 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles
4. Elija UDP o TCP si el MT-88 requiere selección específica del transporte
5. Configure el APN del dispositivo y cualquier usuario o contraseña APN necesarios para GPRS
6. Aplique o guarde la configuración y reinicie el equipo si es necesario
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma

## Comandos de ejemplo para configuración

El MT-88 admite configuración por SMS. Los siguientes comandos públicos se presentan en el orden comúnmente usado. Estos comandos usan la contraseña del dispositivo al inicio. La contraseña por defecto de ejemplo es 0000. Si la ha cambiado, use ese valor en su lugar.

- Comando opcional de restablecimiento de fábrica cuando se configura un dispositivo por primera vez o se requiere un reinicio
```
0000,F11
```

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy. [apn] es obligatorio. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña APN y solo deben incluirse si su operador los exige.
```
0000,A21,2,54.85.159.138,8888,[apn]
```
Si su APN requiere usuario y contraseña inclúyalos así
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```

- Ajustar la zona horaria a UTC 0
```
0000,B36,0
```

- Establecer el intervalo de actualización de posición cada 1 minuto
```
0000,A12,6,0
```

- Configurar parámetros de reporte de eventos
```
0000,C03,0
```

Notas sobre los comandos anteriores
- Envíe cada comando como SMS al número del dispositivo desde un número autorizado si el MT-88 está configurado para aceptar control por SMS.
- Reemplace [apn] con el APN de su operador y reemplace [apnu] y [apnp] solo si su operador exige credenciales de acceso APN.
- El ejemplo usa la IP numérica del servidor 54.85.159.138 y el puerto 8888, que son los valores públicos de Plaspy. Puede especificar d.plaspy.com en herramientas del proveedor que acepten nombres de dominio.

## Notas de configuración

- La configuración por SMS está soportada en el MT-88 usando los comandos documentados arriba, aunque también pueden existir herramientas del proveedor o software para PC
- Revisiones de firmware y variantes de hardware pueden cambiar los comandos o parámetros disponibles, verifique el firmware del dispositivo antes de aplicar cambios globales
- Elija transporte UDP o TCP según las necesidades de su instalación; Plaspy soporta ambos y escucha en el mismo puerto para todos los dispositivos
- Confirme el APN y el acceso a datos de la tarjeta SIM para asegurar que se puedan establecer conexiones GPRS
- Si realiza un restablecimiento de fábrica con el comando F11, considérelo opcional y úselo solo cuando sea necesario para solución de problemas o configuración inicial

## Por qué usar Plaspy con esta configuración

Configurar el MT-88 para reportar a Plaspy le brinda visibilidad centralizada de las ubicaciones y el estado de sus dispositivos en su flota o activos. Usar los ajustes de servidor compartidos de Plaspy simplifica el despliegue porque la plataforma utiliza el mismo puerto para todos los equipos y detecta automáticamente el protocolo del rastreador, reduciendo la complejidad de configuración a gran escala.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific commands, firmware notes, and official configuration details verify information on the manufacturer site https://www.meitrack.com/ before completing deployment.
