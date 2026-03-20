---
slug: /megastek/gt_89/configuration
id: gt_89-configuration
sidebar_label: Configuration
title: Megastek - GT-89 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Megastek GT 89 tracker and Plaspy integration with server and SMS commands
keywords:
  - Megastek GT-89 configuration
  - Megastek GT-89 setup
  - GT-89 Plaspy integration
  - GT-89 server configuration
  - GT-89 SMS commands
  - GPS tracker Plaspy compatibility
  - vehicle tracking GT-89
  - GT-89 GPRS setup
  - Plaspy device configuration
  - tracker protocol detection
---

# Megastek - GT-89 Configuration

This page covers the public configuration context for using the Megastek GT-89 tracker with Plaspy. It summarizes the shared server settings Plaspy expects and presents the public, manufacturer-provided SMS commands commonly used to prepare the tracker for operation on the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation method, and vendor tools. The official Megastek configuration methods should be used when available; the commands shown below reflect the public sample SMS commands provided for the GT-89.

## Configuration Overview

The goal of configuration is to prepare the GT-89 to communicate reliably with Plaspy so the device appears in the platform and reports location and status. For GT-89 devices this frequently means applying a device ID, provisioning the mobile data APN, pointing the tracker to the Plaspy endpoint and port, enabling GPRS reporting, and setting an appropriate update interval.

- Set device identity so reports are associated with the correct unit on Plaspy.
- Configure the mobile operator APN so the tracker can send data over GPRS.
- Point the tracker to Plaspy server settings so position and events arrive at the platform.
- Set reporting interval and enable GPRS mode for continuous tracking.
- Verify the device appears and updates within Plaspy after applying changes.

## Plaspy Server Settings

Configure the GT-89 to send data to the Plaspy server using these public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the device for either protocol when prompted
- Plaspy automatically detects the tracker protocol so the platform accepts incoming connections from supported devices

Note that Plaspy uses the same port for all supported devices and will auto-detect the tracker protocol when data arrives.

## Typical Requirements Before Setup

- A powered GT-89 device with a charged battery or installed vehicle power
- An active SIM card with data and SMS enabled and sufficient balance for SMS and GPRS use
- Access to the tracker IMEI and any device passwords required for configuration
- Ability to send SMS commands from an authorized phone number or access to the manufacturer configuration tool used for the GT-89
- A Plaspy account or platform access to verify the device appears after configuration
- Manufacturer documentation for the specific firmware revision if available

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GT-89 reports location and status to the shared Plaspy endpoint and port. The device uses GPRS to open a data session and transmit GPS and event data to Plaspy so vehicles and assets appear in the platform in near real time.

- The tracker is configured to report to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138
- Data is sent to port 8888 which Plaspy uses across supported devices
- You can configure the tracker to use UDP or TCP transport depending on device options
- Plaspy automatically detects the tracker protocol on incoming connections
- Once reporting is active the platform shows device position and status and accepts further configuration for alerts and history

## Common Configuration Workflow

1. Access the official Megastek GT-89 configuration method recommended by the vendor, commonly SMS commands or the vendor's configuration utility.
2. Prepare the device details such as IMEI and confirm the device password (default shown below is 000000 if unchanged).
3. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888 on the device.
5. Choose UDP or TCP transport if the device requires a selection.
6. Apply or save the changes and restart the device if the tracker requires a restart to apply network parameters.
7. Validate that the device reports to Plaspy and appears in the platform as expected.

If you use the manufacturer sample SMS commands below, send them in the order shown and replace placeholders with your values.

## Example Configuration Commands

The GT-89 sample configuration can be performed by SMS. The following public commands are provided in the manufacturer sample. The sample uses the device password 000000 by default. Replace the password if you have changed it.

- Notes on placeholders
  - Replace \<IMEI> with the device 15 digit IMEI when required.
  - [apn] is the mobile operator APN placeholder.
  - [apnu] and [apnp] are optional APN username and APN password placeholders and should be included only if your operator requires them.

1. Set the device ID
   - Replace XXXXXXXXXXXXXXX with the device IMEI or the 15 digit identifier required by your vendor tools.
   ```sms
   M000000,22,XXXXXXXXXXXXXXX
   ```

2. Set the operator APN
   - Replace [apn] with your operator APN. If needed, include [apnu] and [apnp] for APN username and password.
   ```sms
   M000000,23,[apn]{{,[apnu],[apnp]}}
   ```
   Example with optional fields visible:
   ```sms
   M000000,23,[apn],[apnu],[apnp]
   ```

3. Set the update interval to 60 seconds
   ```sms
   M000000,25,60
   ```

4. Set the GPRS server to point to Plaspy
   - This command sets the GPRS server to the Plaspy IP and port. The sample includes an initial code value followed by the server IP and port.
   ```sms
   M000000,24,56 54.85.159.138,8888
   ```
   Alternatively, when using a domain name, use d.plaspy.com if supported by the device configuration flow.

5. Enable GPRS mode
   ```sms
   M000000,21,2
   ```

Important: the password at the start of each command above is shown as 000000 in the public sample. If your device password differs, replace 000000 with the active device password.

## Configuration Notes

- The example above uses SMS based configuration as provided in the public sample commands. Some installers may prefer the vendor PC tool or over the air methods if supported by the firmware.
- Firmware versions and hardware revisions can change command syntax or supported parameters. Verify commands with the current Megastek documentation for your device firmware.
- Choose UDP or TCP based on network reliability and operator behavior; Plaspy accepts both and detects protocol automatically.
- The Plaspy server endpoint can be set using either the domain d.plaspy.com or the IP address 54.85.159.138 together with port 8888.
- If you change the device password, update the SMS command prefix accordingly before sending any configuration SMS.

## Why Use Plaspy with This Configuration

Using the Megastek GT-89 with Plaspy provides a practical path to vehicle and asset visibility with a shared, predictable server configuration. By pointing the GT-89 at d.plaspy.com or 54.85.159.138 on port 8888 and enabling GPRS reporting, organizations gain centralized location updates, status reporting, and easier onboarding of devices into the Plaspy platform.

To learn more about Plaspy and how to manage trackers at scale visit https://www.plaspy.com. For the most current device specific configuration methods and firmware details verify information on the manufacturer website https://www.megastek.com/.
