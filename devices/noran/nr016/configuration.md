---
slug: /noran/nr016/configuration
id: nr016-configuration
sidebar_label: Configuration
title: Noran - NR016 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Noran NR016 GPS tracker to work with Plaspy servers and shared platform settings
keywords:
  - Noran NR016 configuration
  - Noran NR016 setup
  - Noran NR016 server configuration
  - NR016 Plaspy setup
  - NR016 GPS tracker configuration
  - Noran tracker setup guide
  - vehicle tracker NR016
  - Plaspy tracker configuration
  - NR016 installation guide
  - fleet GPS NR016
---

# Noran - NR016 Configuration

This page covers the public configuration context for using the Noran NR016 tracker with Plaspy. It summarizes the practical server settings and setup workflow known from public manufacturer guidance and Plaspy requirements so installers and fleet managers can prepare the device to communicate with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocol. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The NR016 supports SMS and GPRS configuration in commonly published workflows, and this page integrates those public commands and notes where appropriate.

## Configuration Overview

Preparing the NR016 for Plaspy primarily means configuring its APN and GPRS reporting target so the device can send position and alarm data to Plaspy servers. The public NR016 configuration commonly uses SMS commands to set APN, server IP, and GPRS mode, then verifies operation with a status query.

- Configure the mobile operator APN so the device can open a GPRS session.
- Point the tracker to Plaspy server settings so telemetry and alarms arrive on the platform.
- Switch the device into GPRS reporting mode and confirm a live connection.
- Verify device identity and settings to ensure the tracker will appear in Plaspy.
- Validate event and location reporting in Plaspy after the device connects.

## Plaspy Server Settings

- Server domain d.plaspy.com for platform reporting and identification.
- Server IP 54.85.159.138 where device traffic may be addressed directly.
- Port 8888 which is used by all devices in Plaspy.
- Transport support for UDP or TCP on port 8888 depending on device selection.
- Plaspy automatically detects the tracker protocol so devices using standard tracker protocols will be identified when they connect.

## Typical Requirements Before Setup

- A powered and correctly wired NR016 installed according to installer best practices.
- An active SIM card with data enabled and the correct APN for the mobile operator.
- Access to SMS from a phone or modem to send the manufacturer SMS configuration commands if using SMS setup.
- Knowledge of the device default password if required for SMS commands; public guidance shows a default password of 000000.
- Access to the official Noran configuration manual or installer tool for firmware specific instructions.
- An account or configuration slot on Plaspy to associate and monitor the device once it connects.

## How This Tracker Connects to Plaspy

The NR016 reports location, alarm events, and input telemetry over mobile data to the shared Plaspy server endpoint and port. Once the device opens a GPRS session and sends its protocol messages to the Plaspy endpoint, the platform ingests those messages and presents them in maps, alerts, and reports.

- Sends GPS and hybrid locating data to the Plaspy server endpoint on port 8888.
- Forwards alarms such as SOS, overspeed, geo fence, and vibration events to Plaspy.
- Reports digital and analog input status like ACC and door sensors for trip and security logging.
- Uses either UDP or TCP transport on port 8888 depending on configuration choice.
- After connection Plaspy detects the protocol automatically and makes the device visible in the platform.

## Common Configuration Workflow

1. Access the official Noran configuration method for your NR016, typically SMS commands or the manufacturer installer guide and tools.
2. Configure the operator APN using the SMS or tool so the device can establish GPRS.
3. Enter d.plaspy.com or 54.85.159.138 as the device server address depending on whether you prefer domain or direct IP.
4. Set the server port to 8888 which is the shared Plaspy port for all devices.
5. Choose UDP or TCP transport if the device requires selecting a transport mode.
6. Apply or save the configuration and switch the device to GPRS reporting mode.
7. Restart or power cycle the device if required by the device firmware.
8. Validate that the device reports to Plaspy by checking device status in-platform and using the device status SMS verification command.

## Example Configuration Commands

The NR016 public configuration examples are commonly sent by SMS. The default device password used in public examples is 000000. Preserve placeholders when replacing values.

- Set the operator APN
  - Replace [apn] with your network APN. If the APN requires a username or password include [apnu] and [apnp] as shown.
  ```sms
  A000000,012,[apn]{{,[apnu],[apnp]}}
  ```
  Note: The template in some manufacturer guidance shows a comma separated format. Use the variant required by your firmware. The placeholders mean:
  - [apn] is the mobile data APN
  - [apnu] is the APN username when required
  - [apnp] is the APN password when required

- Set the GPRS server to Plaspy using the public IP and port shown in Plaspy documentation
  ```sms
  A000000,010,54.85.159.138,8888
  ```

- Switch the device to GPRS mode so it will report to the configured server
  ```sms
  A000000,011,1
  ```

- Check current device settings and status
  ```sms
  A000000,004
  ```
  The status reply typically includes the device Id (the first word that starts with NR), APN, server and port, GPRS status (1), GPRS connection status (1), and GSM signal level.

Keep the command order when performing initial setup: APN first, server second, then enable GPRS reporting. Use the status command to confirm values and to obtain the device Id for Plaspy registration.

## Configuration Notes

- Public SMS commands and formats can vary by firmware version. Confirm the exact SMS syntax in the official Noran documentation before sending commands.
- Configuration may be done via SMS or through manufacturer installer software depending on the hardware revision and local installer tools.
- Choose UDP or TCP intentionally; behavior can differ by network and firmware. Plaspy accepts either on the shared port 8888 and will auto detect the protocol.
- Remember that all devices reporting to Plaspy use the same port 8888 which simplifies server configuration across different tracker models.
- The published default password in public examples is 000000. Verify the current device password and change it if needed for security.

## Why Use Plaspy with This Configuration

Using the NR016 with Plaspy centralizes vehicle location, alarm events, and telemetry into one platform so fleet operators and security teams can monitor assets, receive timely alerts, and access historical reports. The NR016’s anti theft and multi input features map well to Plaspy dashboards and alerting rules, making it suitable for vehicles, taxis, and commercial fleets where remote control and rapid incident response are needed.

Learn more about Plaspy and how platform level features work with connected trackers at https://www.plaspy.com. Manufacturer specifications and setup methods change over time; verify the latest device specific configuration and firmware behavior on the official Noran website http://www.norantracker.com/ before installation.
