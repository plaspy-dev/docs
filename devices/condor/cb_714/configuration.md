---
slug: /condor/cb_714/configuration
id: cb_714-configuration
sidebar_label: Configuration
title: Condor - CB-714 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Condor CB-714 integration with Plaspy including server settings and SMS setup commands
keywords:
  - Condor CB-714 configuration
  - Condor CB-714 setup
  - Condor CB-714 Plaspy
  - Condor bicycle tracker configuration
  - CB-714 server configuration
  - CB-714 APN setup
  - CB-714 SMS commands
  - bicycle GPS tracker configuration
  - fleet tracking Condor CB-714
  - Plaspy tracker configuration
---

# Condor - CB-714 Configuration

This page documents the public configuration context for using the Condor CB-714 GPS tracker with the Plaspy platform. It focuses on the practical server settings, SMS setup commands that have been published for the model, and the steps needed to get the device reporting into Plaspy. Use this guide as a technical reference when preparing a CB-714 for integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. Where public SMS commands are provided below they are reproduced as templates; verify values such as APN credentials, IMEI, and any optional fields before applying them.

## Configuration Overview

The configuration process prepares the CB-714 to send its telemetry to Plaspy so rides, routes and trip metrics appear in the platform. Configuration typically includes setting the cellular APN, the device identifier, timezone, the GPRS/server endpoint and update interval so the tracker reports reliably to Plaspy.

- Configure the device APN and any required GPRS credentials so the tracker can use mobile data.
- Set a short device identifier (alias) derived from the IMEI for easy identification in Plaspy.
- Point the tracker to the Plaspy server endpoint and confirm the transport (UDP or TCP) on port 8888.
- Set an update interval appropriate for bicycle tracking needs to balance real-time visibility and battery life.
- Verify connectivity with a device-side check command and confirm the device is visible in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP (the CB-714 may be configured to use either)
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A CB-714 tracker with power and a charged battery or installed power source.
- An active SIM card with a data plan and the correct APN for your mobile operator.
- Access to the device IMEI and knowledge of the tracker default password (sample default password shown below is 0000).
- Ability to send SMS commands to the tracker or access to the official Condor configuration software or tool.
- A Plaspy account and access to the Plaspy platform to verify device visibility after setup.

## How This Tracker Connects to Plaspy

When configured, the CB-714 sends its location and ride telemetry to the Plaspy server endpoint and port so route maps, distance and trip duration become available in the platform. Plaspy receives the uplink, automatically recognizes the tracker protocol, and processes the device messages for display and reporting.

- The tracker points to the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Telemetry uplinks are sent over the chosen transport (UDP or TCP) and received by Plaspy.
- Plaspy processes incoming messages and maps them to the device identifier (alias or IMEI).
- Events and periodic position reports enable route visualization and trip reports in Plaspy.
- Administrators can monitor connectivity and historical trips through the Plaspy interface.

## Common Configuration Workflow

1. Access the official Condor configuration method or software or ensure you can send SMS commands to the device according to the manufacturer's published process.
2. Configure the device APN with your operator settings so GPRS data is available for uplink.
3. Enter the Plaspy server as d.plaspy.com or the IP 54.85.159.138 when the device requires a server address.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and, if required, restart the device to activate changed settings.
6. Use the device verification command to confirm connection status and validate that the device reports to Plaspy.
7. Confirm the device appears in Plaspy and monitor initial position updates and trip logs to ensure the configuration is complete.

## Example Configuration Commands

The CB-714 supports SMS-based configuration using the device password. The sample public configuration uses the default password 0000. Preserve placeholders and replace them with your operator or device values when sending commands.

- Set the operator APN. Replace {{apn}} with your operator APN. Optionally include {{apnu}} (APN username) and {{apnp}} (APN password) if required by your carrier.

  ```
  APN,0000,{{apn}}
  ```

  Or with optional username and password:

  ```
  APN,0000,{{apn}},{{apnu}},{{apnp}}
  ```

- Set a 5-digit identifier (alias). Replace xxxxx with the last 5 digits of the device IMEI. Choose the last five digits of the IMEI as your alias for easy identification.

  ```
  ALIAS,0000,xxxxx#
  ```

  Example instruction: if IMEI ends with 12345 then send:
  ```
  ALIAS,0000,12345#
  ```

- Set the Timezone to UTC-0 (template as published):

  ```
  GMT,0000,-0#
  ```

- Configure the GPRS server to point to Plaspy. This template uses the Plaspy server IP, port 8888, and the published transport flags. If your device configuration interface requires a domain instead of IP you may use d.plaspy.com in place of the IP where supported.

  ```
  SERVIDOR,0000,54.85.159.138,8888,U,A#
  ```

  Note: The example above uses the published IP and includes transport markers as they appear in vendor templates. If your device accepts a domain name you can replace the IP with:
  ```
  SERVIDOR,0000,d.plaspy.com,8888,U,A#
  ```

- Set the update interval (the published example sets updates every 1 minute):

  ```
  INTERVALO,0000,M,6#
  ```

- Set GPRS mode (as published):

  ```
  GPRS,0000,A#
  ```

- Verify the device connection settings (verification command):

  ```
  CONEXION,0000#
  ```

Important: the password 0000 shown here is the sample default from public configuration examples. If your device has a different password or you have changed it, replace 0000 with the device password. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} in your commands until you replace them with real values.

## Configuration Notes

- Manufacturer firmware versions or hardware revisions can change command syntax or required fields; check manufacturer's documentation for any firmware-specific differences.
- The CB-714 supports SMS-based setup as shown in public templates; follow Condor's SMS format exactly and include the correct device password.
- Choose UDP or TCP based on your deployment needs; Plaspy accepts either transport on port 8888 and automatically detects the tracker protocol.
- Use d.plaspy.com or the IP 54.85.159.138 and always set port 8888 since Plaspy uses the same port for all supported devices.
- After making changes, restart the device if required and run the CONEXION verification command to confirm the device is reporting.

## Why Use Plaspy with This Configuration

Using Plaspy with the Condor CB-714 provides a straightforward path to display bicycle routes, distance totals and trip durations in a centralized platform. For bike fleets, rentals, and rider analytics, the CB-714’s telemetry combined with Plaspy’s mapping and reporting tools enables easy monitoring, historical analysis and operational oversight without complex vehicle-specific inputs.

To learn more about Plaspy and how it integrates with devices like the Condor CB-714 visit https://www.plaspy.com. For the latest device-specific configuration methods, command syntax and firmware details confirm information with the manufacturer at https://condorskyseeker.com/ since setup steps and firmware behavior can change over time.
