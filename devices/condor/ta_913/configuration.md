---
slug: /condor/ta_913/configuration
id: ta_913-configuration
sidebar_label: Configuration
title: Condor - TA-913 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Condor TA-913 showing Plaspy server settings and SMS setup commands for integration
keywords:
  - Condor TA-913 configuration
  - Condor TA-913 setup
  - TA-913 Plaspy configuration
  - TA-913 server configuration
  - Condor aviation tracker setup
  - TA-913 SMS commands
  - Plaspy tracker configuration
  - Condor tracker integration
  - TA-913 GPS platform setup
  - aviation tracker configuration
---

# Condor - TA-913 Configuration

This page documents the public configuration context for using the Condor TA-913 with Plaspy. It focuses on the shared server settings Plaspy requires, the common SMS setup commands published for the TA-913, and practical steps to get the tracker reporting to Plaspy for visibility and alerts. The TA-913 is an aviation communications and tracking device that pairs with Plaspy to deliver status messages, panic events, POI markers, and satellite text communications to ground control.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices connect. Exact manufacturer-side setup steps for the TA-913 can vary by firmware, hardware revision, installation type, and vendor tools. The TA-913 model configuration includes public SMS-based commands and a factory default password of 0000 that installers commonly use during initial setup.

## Configuration Overview

Configuring the TA-913 for Plaspy prepares the device to deliver location and event messages to a centralized Plaspy server endpoint so operators can monitor aircraft status and communications in real time. The public configuration flow for this model includes sending SMS configuration messages or using manufacturer software where available to set APN, server, reporting intervals, and GPRS mode.

- Prepare the device to connect to Plaspy by setting the network APN and GPRS mode.
- Point the tracker to the Plaspy server endpoint and the shared port used by all Plaspy devices.
- Configure a device identifier such as an alias based on the IMEI for easy identification in Plaspy.
- Set reporting intervals to control how often the TA-913 sends updates to Plaspy.
- Validate connectivity using the device verification command so the device appears in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com is the canonical domain to use when supported by the device interface.
- Server IP 54.85.159.138 can be used where an IP address is required by the tracker configuration.
- Port 8888 is the shared port that Plaspy uses for all supported devices.
- Transport support for UDP or TCP is available; the TA-913 may be configured to use either UDP or TCP on port 8888.
- Plaspy automatically detects the tracker protocol when a device connects so manual protocol selection is not required by the platform, though the device itself may require you to choose UDP or TCP.

## Typical Requirements Before Setup

- Aircraft power or a stable bench power supply and a powered TA-913 unit ready for configuration.
- An active SIM with data and SMS enabled if using GPRS and SMS configuration methods.
- Access to the TA-913 manufacturer configuration method such as SMS commands or official Condor configuration tools.
- The device IMEI and the ability to read its last digits for alias assignment.
- Knowledge of the mobile operator APN values for the SIM installed in the device.
- A way to receive confirmation SMS messages or view device logs to validate setup.

## How This Tracker Connects to Plaspy

When configured, the TA-913 sends its messages and events to the Plaspy shared server endpoint and port so the platform can ingest telemetry, alerts, and text message logs. Plaspy correlates incoming messages and presents them in dashboards for monitoring, alerting, and historical review.

- The tracker reports to the Plaspy server domain or IP and to port 8888 for all device traffic.
- Messages and events are transmitted over the selected transport, UDP or TCP, as configured on the device.
- Plaspy automatically determines the tracker protocol on connection and ingests the data.
- Status updates, panic events, POI markers, and satellite text messages are forwarded into Plaspy for operator attention.
- Successful configuration ensures the tracker becomes visible in Plaspy dashboards and logging tools.

## Common Configuration Workflow

1. Access the official Condor TA-913 configuration method, typically SMS-based commands or the manufacturer's configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server or GPRS server field.
3. Set the port to 8888 which is the shared port used by Plaspy for all devices.
4. Choose UDP or TCP for transport if the TA-913 requires explicit transport selection.
5. Set the device APN, alias or identifier, timezone, reporting interval, and enable GPRS mode as required.
6. Apply or save the configuration on the device and restart the unit if the device or firmware requires a reboot.
7. Validate that the device reports to Plaspy using the provided verification command or by checking Plaspy for device visibility and incoming telemetry.

## Example Configuration Commands

The TA-913 public configuration uses SMS commands. Commands below preserve placeholders and ordering from the public model configuration. Use the factory default password 0000 where shown unless you have changed it.

- Set the operator APN
```
APN,0000,{{apn}}{{,{{apnu}},{{apnp}}}}
```
Note: Replace {{apn}} with your operator APN. If your operator requires a username or password, include {{apnu}} and {{apnp}} respectively. If not required, omit them.

- Set a 5 digit identifier (use the last 5 digits of the IMEI)
```
ALIAS,0000,<last5imei>#
```
Note: Replace <last5imei> with the device IMEI last five digits. The tracker uses this alias for identification.

- Set the Timezone to UTC 0
```
GMT,0000,-0#
```

- Set the GPRS server to point to Plaspy by IP, port, and transport
```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
Note: This example uses the Plaspy server IP and port 8888 and selects UDP as the transport. You can substitute d.plaspy.com for the IP where the device accepts a domain name, and choose UDP or TCP as needed.

- Set the update interval (example sets updates every 1 minute)
```
INTERVALO,0000,M,6#
```

- Set GPRS mode to active
```
GPRS,0000,A#
```

- Verify the device connection settings
```
CONEXION,0000#
```

Send each command as an SMS to the TA-913 using the device default password 0000 unless you have changed the password. Keep the command order when the manufacturer indicates order matters for proper initialization.

## Configuration Notes

- The TA-913 public instructions show SMS-based configuration; some deployments may instead use Condor configuration software or service tools.
- Firmware versions or hardware revisions can change command syntax or required parameters; verify commands against the device firmware notes when possible.
- TCP versus UDP choice affects transport behavior on the tracker; Plaspy supports both and will detect the incoming protocol automatically.
- Using the server domain d.plaspy.com is preferred when the device supports domain names, otherwise the server IP 54.85.159.138 is an acceptable alternative.
- Ensure the SIM APN and GPRS mode are correct before setting the server so the tracker can establish a data connection.

## Why Use Plaspy with This Configuration

Configuring the TA-913 to report to Plaspy provides a unified view of aircraft events, status messages, and satellite text communications, helping operators maintain situational awareness and respond to critical events. With Plaspy ingesting button events, POI markers, and messages from the TA-913, dispatch and operations teams gain traceable logs and real-time alerts that support safety and mission workflows.

Learn more about Plaspy and how it integrates with compatible trackers at https://www.plaspy.com. For the latest device specific setup details, command syntax, and firmware notes for the TA-913 consult the manufacturer site https://condorskyseeker.com/ as device configuration methods and firmware behavior can change over time.
