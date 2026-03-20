---
slug: /aoya/a202/configuration
id: a202-configuration
sidebar_label: Configuration
title: AoYa - A202 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the AoYa A202 GPS tracker for use with Plaspy including SMS commands and server settings
keywords:
  - AoYa A202 configuration
  - AoYa A202 setup
  - AoYa A202 Plaspy
  - AoYa GPS tracker configuration
  - A202 server configuration
  - A202 setup guide
  - vehicle tracking configuration
  - fleet tracking setup
  - GPRS tracker configuration
  - SMS configuration commands
---

# AoYa - A202 Configuration

This page documents the public configuration context for using the AoYa A202 GPS tracker with Plaspy. It summarizes the shared Plaspy server settings you must apply, explains the typical setup workflow, and extracts the publicly available SMS commands provided by the device manufacturer for configuring connectivity and server details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and the vendor tools you use. The information below uses the AoYa A202 description and the publicly available SMS command examples as the primary grounding, while encouraging verification against the manufacturer documentation.

## Configuration Overview

This configuration process prepares the A202 to communicate with the Plaspy platform so that vehicle location and status data are delivered to the shared Plaspy endpoint. The steps typically include setting the mobile data parameters, pointing the tracker at the Plaspy server, choosing the transport protocol, and validating that the device reports successfully.

- Configure the device APN and GPRS parameters so it can access mobile data networks.
- Set the Plaspy server endpoint and port so the device sends telemetry to Plaspy.
- Choose UDP or TCP transport on the device if required by the device interface.
- Validate connectivity by checking device responses and confirming reporting in Plaspy.
- Optionally perform a factory reset or timezone setting as part of initial setup.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered AoYa A202 with battery charged and accessible for configuration.
- An active SIM card with mobile data enabled and the operator APN ready.
- Access to the manufacturer configuration method such as SMS commands or vendor tools.
- Knowledge of the device default password if required for configuration (the example here uses 123456).
- A device phone number or remote SMS access to send configuration SMS commands.
- Confirmation of firmware version or hardware revision if available, as commands can vary.

## How This Tracker Connects to Plaspy

The AoYa A202 is configured to send its location and status data to the shared Plaspy server endpoint and port so Plaspy can ingest and display telemetry for tracking and monitoring. Once APN and server settings are applied, the device sends periodic or event driven packets to Plaspy for processing and visibility.

- The tracker uses the configured GPRS connection to reach d.plaspy.com or the Plaspy server IP.
- Data is sent to Plaspy over port 8888 using either UDP or TCP as configured on the device.
- Plaspy automatically detects the tracker protocol so standard server settings are sufficient for most setups.
- When configured correctly the device will report location and status to Plaspy for live visibility and history.
- Validation on both the device and the Plaspy platform confirms end to end connectivity.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the AoYa A202 such as the SMS command interface or any vendor software provided by AoYa.
2. Ensure the device has an active SIM with the correct APN and that you can send SMS to the device.
3. Enter the Plaspy server settings using either d.plaspy.com or the Plaspy server IP 54.85.159.138 and set port 8888.
4. Choose UDP or TCP on the device transport selection if the device requires a transport choice.
5. Apply or save the configuration and restart the device if the device requires a reboot for network changes to take effect.
6. Validate that the device reports to Plaspy by using the device verification command and confirming the device appears in the Plaspy platform.
7. If needed, repeat or adjust APN or transport settings based on connectivity results and firmware behavior.

## Example Configuration Commands

The AoYa A202 supports SMS based configuration. The following public SMS commands are provided as examples and should be sent from an authorized phone to the tracker SIM number. The default device password shown in these examples is 123456. Replace placeholders where indicated.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN)
```text
apn123456 [apn]
```

- Set the APN username and password if required by the operator (replace placeholders)
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```

- Switch to GPRS mode and choose transport (example formats shown)
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Check current settings and status
```text
check123456
```

Notes on placeholders
- [apn] = your mobile operator APN string.
- [apnu] = APN username if required by the operator.
- [apnp] = APN password if required by the operator.
- Keep the device password (123456 in these examples) as provided by the manufacturer or replace with the device password configured on your unit.

## Configuration Notes

- Commands shown are SMS based and come from the public manufacturer examples; some installations may use a configuration tool or different command syntax depending on firmware.
- Firmware revisions and hardware batches can change command support or syntax; verify commands on the device before wide deployment.
- Choose UDP or TCP according to network conditions and any recommendations from your mobile operator; Plaspy accepts both on port 8888.
- The adminip command example uses the Plaspy server IP 54.85.159.138 and port 8888; you can also use the domain d.plaspy.com if the device accepts domain parameters.
- Use the check123456 verification command to confirm applied settings before relying on platform visibility.

## Why Use Plaspy with This Configuration

Using the AoYa A202 with Plaspy gives teams a practical path to bring device telemetry into a single platform for location visibility, event monitoring, and operational oversight. The shared server settings and Plaspy automatic protocol detection simplify device onboarding so you can standardize device behavior across a mixed fleet.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and official command references verify details on the manufacturer website http://www.aoyagps.com/ since vendor setup steps and firmware behavior can change over time.
