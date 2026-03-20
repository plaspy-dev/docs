---
slug: /wanway/gs21/configuration
id: gs21-configuration
sidebar_label: Configuration
title: WanWay - GS21 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the WanWay GS21 showing how to point the device to Plaspy and verify connectivity
keywords:
  - WanWay GS21 configuration
  - WanWay GS21 setup
  - WanWay GS21 server configuration
  - GS21 Plaspy setup
  - GS21 GPS tracker configuration
  - WanWay tracker Plaspy
  - GS21 SMS commands
  - vehicle tracker configuration
  - OBD II tracker setup
  - fleet tracking setup
---

# WanWay - GS21 Configuration

This page documents the public configuration context for using the WanWay GS21 tracker with Plaspy. It summarizes the server settings Plaspy requires, the common manufacturer commands that are published for the GS21, and practical steps to prepare the device so it can report to the Plaspy platform. Use this as a platform-focused companion to the manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GS21 supports SMS and GPRS style setup commands that are commonly used to configure server host, APN, reporting intervals, and GPRS mode before the device begins sending data to Plaspy.

## Configuration Overview

The configuration process prepares a GS21 OBD II tracker to communicate reliably with Plaspy so the device appears and updates correctly in the platform. When you apply the settings below you are pointing the tracker at the Plaspy endpoint, enabling data reporting, and confirming connectivity.

- Configure the carrier APN so the GS21 can open a GPRS data session to the mobile network.
- Point the device to the Plaspy server host so location messages are routed to the platform.
- Set reporting intervals to suit monitoring needs and conserve data when required.
- Switch the tracker into GPRS mode so it transmits over IP rather than local storage.
- Validate the tracker status and parameters to confirm it is registered to Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A GS21 device properly installed in the vehicle and powered through the OBD II port or equivalent connection.
- An active SIM card with mobile data enabled and the correct carrier APN information.
- Ability to send SMS to the tracker number or access to the official manufacturer configuration tool if available.
- Basic knowledge of the device's SMS command format or access to vendor documentation to confirm command syntax.
- A plan for an appropriate reporting interval suitable for your monitoring needs and data plan.

## How This Tracker Connects to Plaspy

The GS21 is configured to report its position and status to the shared Plaspy server endpoint and port so the device becomes visible and manageable within the Plaspy platform. Once the device has working GPRS and the server settings are saved, it will begin sending data to Plaspy for location updates, alerts, and operational monitoring.

- The tracker sends location and status messages to d.plaspy.com on port 8888.
- Data is transported over GPRS using either UDP or TCP depending on the selected transport option.
- Plaspy receives the incoming connection and automatically detects the tracker protocol for correct parsing.
- Regular timer or interval messages are used to provide continuous visibility in the Plaspy platform.
- Verification commands can be issued over SMS to confirm current settings and operational status.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor utility provided by WanWay.
2. Enter the Plaspy server host by setting the device server field to d.plaspy.com or the server IP 54.85.159.138.
3. Set the remote port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP for transport if the device requires a transport selection.
5. Configure the carrier APN and any APN credentials required by your SIM.
6. Apply or save the configuration, then switch the device to GPRS mode if necessary.
7. Restart or power cycle the device if recommended by the manufacturer.
8. Validate that the device reports to Plaspy by checking device status on the platform and by using the device verification commands.

## Example Configuration Commands

The GS21 accepts SMS commands for basic configuration. Below are the common public commands published for the GS21. Send these as SMS messages to the device number in the order shown during initial setup.

- Configure the carrier APN. Use the APN placeholder fields as required by your mobile operator. If username and password are not needed, use the simple form.

```
APN,[apn]#
```

or, if your carrier requires APN username and password:

```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy using the domain and port. The example sets server index 1 to d.plaspy.com on port 8888.

```
SERVER,1,d.plaspy.com,8888,0#
```

- Set the device reporting interval (example uses 60 seconds for both moving and stationary intervals).

```
TIMER,60,60#
```

- Switch the device GPRS on so it will attempt to connect to the server over mobile data.

```
GPRSON,1#
```

- Verify the current configuration parameters (request).

```
PARAM#
```

- Check device status (request).

```
STATUS#
```

Notes on placeholders:
- [apn] is your carrier APN name.
- [apnu] is the APN username if required by the carrier.
- [apnp] is the APN password if required by the carrier.

Send each command as a single SMS to the device. The exact response format and available indexes may vary by firmware.

## Configuration Notes

- Firmware and hardware revisions may change available commands or syntax; always confirm command syntax against the latest WanWay documentation.
- The GS21 supports both SMS based configuration and GPRS reporting; SMS configuration is commonly used for headless or field setups.
- Choose UDP or TCP based on your deployment needs; Plaspy accepts both and will auto detect the tracker protocol when the device connects to d.plaspy.com on port 8888.
- Use conservative reporting intervals to manage data usage on metered SIM plans.
- If a setting does not appear to apply, try a device restart or consult WanWay support for firmware specific behavior.

## Why Use Plaspy with This Configuration

Using Plaspy with the WanWay GS21 gives organizations a straightforward way to centralize vehicle visibility and event monitoring. Pointing the GS21 at Plaspy's shared server makes the device visible in the platform quickly, enabling real time location updates and operational oversight with minimal configuration steps.

To learn more about Plaspy and how the platform handles device connections and fleet monitoring visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance please verify details with the manufacturer at https://www.wanwaytech.net/ as specifications and setup methods can change over time.
