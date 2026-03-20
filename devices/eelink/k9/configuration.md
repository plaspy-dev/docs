---
slug: /eelink/k9/configuration
id: k9-configuration
sidebar_label: Configuration
title: EElink - K9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink K9 tracker showing Plaspy server settings and SMS commands for connectivity
keywords:
  - EElink K9 configuration
  - EElink K9 setup
  - EElink K9 Plaspy
  - K9 GPS tracker configuration
  - K9 server configuration
  - K9 SMS commands
  - EElink tracker setup
  - GPS tracker Plaspy integration
  - vehicle tracking K9
  - K9 GPRS setup
---

# EElink - K9 Configuration

This page provides the public configuration context for using the EElink K9 GPS tracker with the Plaspy platform. It focuses on the practical server and command-level settings that prepare the device to communicate with Plaspy and be visible in the platform. Where available, we include example SMS commands and verification steps published for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The K9 supports SMS configuration as a documented public option, so the examples below reflect common SMS commands and workflow used to point the tracker at Plaspy.

## Configuration Overview

Configuring the EElink K9 for use with Plaspy prepares the device to send location and status updates to a central, shared Plaspy endpoint. The process typically ensures the tracker has proper network access, correct APN settings for GPRS, and the server address and port set to Plaspy values so the platform can receive and interpret the device messages.

- Set the device APN so GPRS data is available for uploads to Plaspy.
- Configure the K9 server address to point to the Plaspy endpoint and set port 8888.
- Choose transport mode (UDP or TCP) if the tracker requires an explicit selection.
- Set a reporting interval to control how often the K9 uploads location to Plaspy.
- Verify configuration with the device parameter check and confirm the device appears in Plaspy.
- Optionally reset to factory settings during initial provisioning when required.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 as an alternative to the domain
- Port 8888 which is used by Plaspy for tracker connections
- Transport support for UDP or TCP; the K9 may be configured to use either transport
- Automatic protocol detection in Plaspy so the platform detects the tracker protocol on connection

Plaspy uses the same port for all supported devices and will attempt to detect the device protocol automatically when a tracker connects to the server.

## Typical Requirements Before Setup

- A charged, operational EElink K9 with access to SMS configuration or the manufacturer configuration tool
- A SIM card provisioned with data and SMS capability and correct APN information from the network operator
- Access to the operator APN, and optional APN username and password if required by the mobile operator
- Basic knowledge of sending SMS commands to the device or access to the manufacturer's provisioning software
- Adequate GSM and GPS signal at the device location to allow GPRS uploads and satellite positioning
- A Plaspy account and ability to register or identify the device in your Plaspy workspace for visibility after it connects

## How This Tracker Connects to Plaspy

The EElink K9 is configured to send periodic location and status updates to the Plaspy server endpoint and port. Once the device is pointed to the Plaspy address and has an active data connection, Plaspy receives messages and makes the device visible in the platform for live tracking and event monitoring.

- The tracker uploads position data over GPRS to the Plaspy server endpoint.
- Device messages are sent to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy handles both UDP and TCP transports and auto-detects the tracker protocol.
- The tracker can be configured to report at a chosen interval so updates appear in Plaspy as required.
- Events such as SOS, geo-fence, and speed alarms (if enabled on the device) are delivered to Plaspy for notifications and monitoring.

## Common Configuration Workflow

1. Access the official EElink manufacturer configuration method for the K9 such as SMS commands or the vendor provisioning tool.
2. Configure the device APN using the operator APN values provided by your mobile carrier.
3. Enter the Plaspy server endpoint using either d.plaspy.com or the IP address 54.85.159.138.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and perform any recommended restart or reboot.
6. Validate the device reports to Plaspy and appears in your Plaspy account, using the PARAM# command or the Plaspy device list to confirm connectivity.

## Example Configuration Commands

The K9 supports SMS based configuration. The following public SMS commands are provided in the manufacturer documentation and are shown in the order commonly used for setup. Send each line as an individual SMS message to the device number.

- Optional initial factory reset (use only if you need to clear existing settings)
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your network APN. Optional username and password placeholders are [apnu] and [apnp] respectively. Include them only if required by your operator.
```
APN,[apn],[apnu],[apnp]#
```
If no username or password are needed, the command may be:
```
APN,[apn]#
```

- Set the GPRS server to the Plaspy domain using the domain form
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to the Plaspy IP using the IP form
```
SERVER,0,54.85.159.138,8888#
```

- Set the upload/reporting interval to 60 seconds
```
TIMER,60#
```

- Check current parameter settings to verify configuration
```
PARAM#
```

Notes on these commands:
- Maintain the order when applying commands for initial provisioning where appropriate.
- Keep the placeholders [apn], [apnu], and [apnp] as provided and substitute your carrier values when sending the SMS.
- Use the SERVER command with either the domain d.plaspy.com or the IP 54.85.159.138 and port 8888. The choice of domain or IP is a local preference; Plaspy accepts both.

## Configuration Notes

- Firmware and hardware revisions may change exact command behavior or available options; always verify with manufacturer documentation for your device serial number and firmware.
- The K9 supports SMS configuration in the examples above; some installations may prefer using vendor software or OTA updates where available.
- Choose TCP or UDP according to the device option set; Plaspy accepts either and will automatically detect the protocol used by the tracker.
- Plaspy uses port 8888 for all devices, so you do not need device specific port values when integrating a supported tracker.
- After configuration, confirm device visibility in Plaspy and monitor initial messages to ensure APN and server settings were applied correctly.

## Why Use Plaspy with This Configuration

Using the EElink K9 configured to report to Plaspy provides a consistent way to centralize location, event, and status reporting across a fleet or personal devices. With the K9 pointed at the Plaspy server endpoint and port, organizations gain continuous visibility and a single platform to review history, alarms, and device health for operational oversight.

Learn more about Plaspy and how it integrates with supported trackers at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify current information on the official EElink website https://www.eelink.com.cn/ as configuration methods and firmware behavior can change over time.
