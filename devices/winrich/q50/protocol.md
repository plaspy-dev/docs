---
slug: /winrich/q50/protocol
id: q50-protocol
sidebar_label: Protocol
title: Winrich - Q50 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the Winrich Q50 GPS watch and how it communicates with Plaspy for tracking and alerts
keywords:
  - Winrich Q50 protocol
  - Winrich Q50 GPS protocol
  - Winrich Q50 protocol for Plaspy
  - Winrich Q50 communication protocol
  - Winrich Q50 tracking protocol
  - Winrich Q50 tracker Plaspy
  - GPS watch protocol
  - personal tracker protocol
  - GSM GPS tracker protocol
  - dual mode GPS LBS protocol
---

# Winrich - Q50 Protocol

This page describes the public protocol context for using the Winrich Q50 GPS watch with the Plaspy platform. It focuses on how the device reports location, status, and alert events to Plaspy so integrators and administrators understand the communication relationship without exposing private implementation details. The Q50 is a wearable personal tracker that uses an MTK3337 GPS receiver together with an MTK6261 GSM modem to provide GPS plus LBS positioning, SOS alarms, two way voice, tamper and low battery events.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, or manufacturer settings, so operational differences between units are possible even within the same model family.

## Protocol Overview

The Q50’s communication protocol defines the messages the watch sends over cellular networks and the event types that Plaspy consumes to present live tracking, alerts, and history. In practice this means the device reports position fixes (GPS or LBS), SOS and tamper events, voice call indicators, and battery status which Plaspy displays on maps and in notifications.

- Reports location fixes using GPS when available and LBS base station data as a fallback to provide usable position data to Plaspy.
- Sends event messages for SOS, geo fence transitions, tamper or anti drop, and low battery so Plaspy can trigger notifications and escalation workflows.
- Uses the GSM modem for data and voice events; Plaspy ingests the incoming messages to correlate telemetry and timestamps.
- Identifies the device in each message so Plaspy can associate incoming data with the correct asset record.
- Provides status telemetry that allows Plaspy to mark fixes as GPS or LBS and to show confidence or signal context to operators.

## How Plaspy Detects the Protocol

Plaspy receives incoming messages at a shared endpoint and automatically determines which tracker protocol a device is using when the device reports to the Plaspy server. In most deployments a user does not need to manually select a protocol inside Plaspy if the device is configured to send data to the correct Plaspy endpoint.

- Plaspy’s public server endpoint domain is d.plaspy.com and the server IP is 54.85.159.138.
- Plaspy listens on port 8888 and all devices supported by Plaspy use this same port.
- Devices may be configured to use UDP or TCP transport, and Plaspy supports either transport on port 8888.
- When a properly configured Q50 reports to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol and associate messages with the correct device record.
- Proper device configuration to point at d.plaspy.com or 54.85.159.138 is the typical requirement for automatic detection to succeed.

## Transport and Connection Context

Connection context covers how the device reaches Plaspy over the cellular network and which transport methods are acceptable. The Q50 uses its GSM modem to send reporting messages and events to Plaspy, and transport selection can affect reliability depending on network and SIM configuration.

- The Q50 may be configured to use either UDP or TCP transport on port 8888.
- Plaspy’s server domain is d.plaspy.com and its public IP is 54.85.159.138; devices can point to either host value when sending reports.
- Plaspy uses the same port, 8888, for all supported devices to simplify device configuration and connectivity management.
- Ensure the device SIM and mobile operator allow the chosen transport and IP/domain access for reliable reporting.
- Network level issues such as operator firewalls, APN misconfiguration, or poor signal can affect message delivery independent of protocol correctness.

## Protocol Compatibility Notes

- Firmware versions may change message contents, timing, or event flags; verify the Q50 firmware level when troubleshooting differences in behavior.
- Hardware revisions can result in small feature differences across batches; some units may report slightly different telemetry sets.
- Manufacturer configuration options such as reporting intervals, geo fence behavior, and voice settings can affect what Plaspy receives.
- Choose the device transport (UDP or TCP) based on reliability and mobile network characteristics in your deployment area.
- Confirm that the SIM and operator settings (APN, data enabled) are correct so the Q50 can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Always validate compatibility and feature support against the manufacturer’s current documentation before large scale deployments.

## Why Protocol Understanding Matters

Knowing how the Q50 communicates helps with initial setup, diagnosing missed reports, and ensuring alerts are actionable in Plaspy. A clear understanding reduces downtime, speeds troubleshooting, and helps operators interpret the telemetry Plaspy shows on maps and in reports.

- Faster troubleshooting when location updates or SOS events do not appear as expected.
- Better configuration choices for reporting intervals and transport based on battery life and network behavior.
- Accurate expectations for position accuracy when comparing GPS fixes versus LBS fallbacks.
- Clear mapping of device events such as tamper or low battery to Plaspy notifications and escalation workflows.
- Improved planning for maintenance and firmware updates by understanding potential protocol changes across versions.

## Why Use Plaspy with This Protocol

Using the Winrich Q50 with Plaspy provides a straightforward path to continuous personal monitoring, real time alerts, and historical reporting for caregivers, security teams, and operations staff. The Q50 supplies the essential telemetry—location, SOS, voice indicators, tamper and battery status—that Plaspy uses to deliver map based visibility, notification routing, and incident history.

To learn more about Plaspy and how it handles device integration and fleet or personal tracking, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify current device specific protocol information on the manufacturer website at http://www.winrichgroup.com/en/ before large scale deployments.
