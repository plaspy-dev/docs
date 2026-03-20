---
slug: /castel/idd_212b/configuration
id: idd_212b-configuration
sidebar_label: Configuration
title: Castel - IDD-212B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Castel IDD 212B to Plaspy with practical server settings and SMS commands
keywords:
  - Castel IDD-212B configuration
  - Castel IDD-212B setup
  - Castel IDD-212B Plaspy
  - Castel GPS tracker configuration
  - Castel vehicle tracking setup
  - IDD-212B configuration guide
  - IDD-212B server settings
  - Plaspy tracker configuration
  - OBD Bluetooth tracker setup
  - vehicle diagnostics tracking
---

# Castel - IDD-212B Configuration

This page documents the public configuration context for using the Castel IDD-212B with Plaspy. It gathers the practical server settings and the manufacturer provided SMS commands that are commonly used to point the device at Plaspy so the tracker can report to the platform. Use this as a compact reference for the basic steps required to prepare the IDD-212B for visibility in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The IDD-212B may be configured by SMS commands in the manufacturer provided format shown below, so verify any differences against the official Castel documentation.

## Configuration Overview

The goal of the configuration is to prepare the IDD-212B so it can establish a data connection to Plaspy and be visible in the platform. That includes setting APN and server parameters, confirming the device accepts the settings, and validating that data reaches Plaspy.

- Configure the device to use Plaspy as the server endpoint so vehicle data is routed to the platform
- Set the APN and GSM parameters required for the device to open GPRS data sessions
- Verify server address and port are saved and the device is able to reach Plaspy
- Validate reporting by checking device responses and confirming visibility in Plaspy
- Keep a note of the device ID and default SMS secret key for secure configuration

## Plaspy Server Settings

Use the following public Plaspy connection settings when configuring the IDD-212B:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol so all devices can use the same port

Note that Plaspy uses the same port for all supported devices and is able to automatically detect the device protocol.

## Typical Requirements Before Setup

- A powered and accessible IDD-212B unit with the installer or device ID available
- A valid SIM card with a data plan and APN information for GPRS connectivity
- Ability to send SMS to the device from a phone or use the manufacturer configuration tool if available
- Knowledge of the device ID so you can derive the default SMS secret key if required
- A safe bench or vehicle installation environment to test connectivity and restart the device
- Access to the official Castel configuration documentation or vendor support for firmware specific instructions

## How This Tracker Connects to Plaspy

The IDD-212B is configured to report its data to the Plaspy server endpoint and port so location and event data are received into the platform. Once server and APN settings are correctly applied, the device opens a data session and begins sending telemetry to Plaspy where it is parsed and shown in the account.

- The device is pointed at the Plaspy server address or IP and the configured port for outbound connections
- Transport may be either UDP or TCP depending on what the device firmware supports
- Plaspy receives the incoming connection on the shared port and automatically detects the tracker protocol
- After successful configuration, the device reports its status and location so it becomes visible in Plaspy
- Validation of connectivity confirms that data flows from the device to the Plaspy server

## Common Configuration Workflow

1. Access the official Castel configuration method for the IDD-212B such as SMS commands or the vendor tool recommended by the manufacturer
2. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server setting field
3. Set the device port to 8888 which is the Plaspy platform port used for all devices
4. Choose UDP or TCP if the device requires an explicit transport selection
5. Set the APN and any APN username or password fields required by the SIM operator
6. Apply or save the configuration and restart the device if the device requires a reboot to apply changes
7. Validate that the device reports to Plaspy by checking device responses and confirming visibility in the Plaspy platform

If you are using the SMS method shown below, the SMS commands are sent in the order shown and the device will respond with confirmation if settings are accepted.

## Example Configuration Commands

The following commands are taken from the public Castel configuration format. The IDD-212B accepts SMS commands where a secret key is required. The default SMS secret key for instructions is the last six ASCII characters of the device ID unless it has been changed.

- To set APN and server IP and port use the set gprs command. Replace the placeholders with your APN values and the device SMS secret key:

```
*{{SecretKey}}#set gprs#{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888*
```

- To check the current GPRS and server settings on the device use the get gprs command:

```
*{{SecretKey}}#get gprs#*
```

Notes on placeholders and usage:
- {{SecretKey}} is the SMS password for the device. By default it is the last six ASCII characters of the device ID unless changed by the installer.
- {{apn}} is the mobile network APN string provided by the SIM operator.
- {{apnu}} is the APN username when required by the network. If not required, leave it blank.
- {{apnp}} is the APN password when required by the network. If not required, leave it blank.
- The examples above use the Plaspy server IP 54.85.159.138 and port 8888. Plaspy is also reachable at the domain d.plaspy.com but confirm whether your device accepts domain names or requires an IP.

Send these SMS commands from a phone number recognized by the device or following the manufacturer guidance for SMS configuration. Wait for device confirmation responses before proceeding to validation.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or accepted parameters. Always confirm commands against the device firmware version.
- The IDD-212B supports SMS based configuration in the public command format shown here. Vendor tools or over the air methods may also be available from Castel.
- Choose UDP or TCP according to the device firmware options and network behavior. Plaspy supports both and detects the protocol automatically.
- Test configuration on a single device in a controlled environment before roll out to multiple units.
- Keep a record of the device ID and any changed SMS secret key for future maintenance.

## Why Use Plaspy with This Configuration

Configuring the Castel IDD-212B to report to Plaspy provides a straightforward route to collect vehicle data and make it available in a centralized fleet management platform. Using the shared Plaspy endpoint and port reduces per device variation and Plaspys automatic protocol detection simplifies device onboarding.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the most current and device specific setup details confirm the latest manufacturer information at http://www.castelecom.com/ since setup methods and firmware behavior can change over time.
