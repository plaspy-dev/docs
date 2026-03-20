---
slug: /topshine/mt08b/protocol
id: mt08b-protocol
sidebar_label: Protocol
title: TopShine - MT08B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for TopShine MT08B integration with Plaspy covering connection settings and integration considerations
keywords:
  - TopShine MT08B protocol
  - TopShine MT08B GPS protocol
  - TopShine MT08B communication protocol
  - TopShine MT08B tracking protocol
  - TopShine GPS tracker Plaspy
  - MT08B Plaspy compatibility
  - TopShine tracker protocol
  - motorcycle GPS protocol
  - GPRS SMS tracker protocol
  - fleet tracking Plaspy
---

# TopShine - MT08B Protocol

This page describes the public protocol context for using the TopShine MT08B portable motorcycle GPS tracker with the Plaspy platform. It focuses on how the MT08B reports location and telemetry to Plaspy using standard cellular reporting methods and the shared Plaspy connection settings used by supported devices.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol at its endpoint. Exact protocol behavior and message details can vary with firmware revisions, hardware variants, and manufacturer implementation, so this page emphasizes the integration context and practical setup considerations rather than device internals.

## Protocol Overview

The MT08B communicates to remote servers over GSM networks using SMS or GPRS data reporting. The protocol role in this context is to reliably deliver position, motion and I/O events from the device to the Plaspy backend so those events can be displayed on maps, trigger alerts, and be stored in history for reporting.

- Provides a vehicle identity and periodic or event driven position reports for Plaspy to display on maps
- Transmits telemetry such as speed, timestamp, satellite fix status, and input/output events to support alerts
- Delivers security events like geo fence breaches, motion detection, power cut and SOS signals for immediate handling
- Supports remote control and status checks via SMS or data based commands as provided by the device implementation
- Enables Plaspy to correlate incoming messages with a registered device for live and historical tracking

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and messages at a shared endpoint and port and performs automatic protocol detection to match the device messages to a supported device profile. In most cases a properly configured device that reports to the Plaspy endpoint will be recognized without manual protocol selection inside Plaspy.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 and the port is 8888
- Plaspy automatically detects the tracker protocol when data arrives on the shared endpoint
- Because Plaspy uses the same port for all supported devices, you do not normally need to pick a protocol inside Plaspy if the device is reporting correctly
- Proper device identification on first contact (IMEI or device ID sent from MT08B) helps Plaspy match the stream to the account
- If a device uses SMS reporting instead of GPRS, Plaspy can accept SMS forwarded or gatewayed messages according to the deployment model

## Transport and Connection Context

The MT08B can report via SMS or using GPRS over the cellular network. When using GPRS data reporting the device may be configured to connect to the Plaspy endpoint over either UDP or TCP on the agreed port, depending on the device firmware and configuration options.

- The device may be configured using UDP or TCP on port 8888
- Devices may point to d.plaspy.com or to the numeric address 54.85.159.138 for GPRS reporting
- All devices in Plaspy use the same port which simplifies firewall and APN setup on carrier networks
- SMS reporting is an alternative transport for devices or regions where data is unavailable or as a fallback
- Confirm the device APN and GPRS settings from the device configuration guide to ensure it can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions on the MT08B can change available commands, message cadence, and optional fields included in reports
- Hardware revisions or regional variants may alter available GNSS behavior or I/O mappings versus published examples
- Transport choice (SMS versus GPRS, UDP versus TCP) affects how the data is routed and what network settings are required
- Manufacturer configuration commands used to set server, APN, and transport must be applied correctly for Plaspy to detect the device
- Plaspy’s automatic detection covers common message styles but unique or heavily customized firmware may require validation
- Always validate compatibility against the manufacturer documentation and any release notes for the device firmware

## Why Protocol Understanding Matters

Understanding how the MT08B communicates with Plaspy helps ensure reliable initial setup, faster troubleshooting, and consistent long term operation. Knowing which transport the device uses and what events it emits reduces integration time and avoids common connectivity issues.

- Helps confirm correct APN and server entries so the device can reach Plaspy over GPRS
- Makes firewall and carrier configuration straightforward when you know the transport and port requirements
- Speeds troubleshooting by clarifying whether an issue is transport related, configuration related, or device specific
- Enables accurate event mapping in Plaspy for inputs, outputs, SOS, and motion alerts
- Supports planning for firmware updates and feature expectations tied to device revisions

## Why Use Plaspy with This Protocol

Using the MT08B with Plaspy provides a practical path to real time maps, alerting, and historical reports for motorcycles and small vehicles. Plaspy’s handling of shared connection settings and automatic protocol detection simplifies onboarding while allowing fleet managers to leverage location, motion, and I/O events for security and operational workflows.

If you want to learn more about Plaspy and how it works with devices like the TopShine MT08B, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration commands refer to the manufacturer documentation at https://www.gztopshine.com/ since protocol support and firmware behavior can change over time.
